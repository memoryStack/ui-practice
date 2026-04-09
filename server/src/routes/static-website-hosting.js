const path = require('path')
const fs = require('fs').promises
const express = require('express')

// CRA output is at repo root `build/`, not under `server/`.
const BUILD_DIR = path.join(__dirname, '../../..', 'build')
const INDEX_HTML = path.join(BUILD_DIR, 'index.html')

/**
 * Example server-side work you might do before streaming HTML (auth, flags, DB, etc.).
 * Returns metrics you can expose via Server-Timing or custom headers.
 */
async function runPageComputation(req) {
    const t0 = performance.now()
    // Replace with real async work; kept trivial so behavior is obvious.
    const pageVariant = `pv-${Math.random().toString(36).slice(2, 10)}`
    await new Promise((r) => setImmediate(r))
    const durationMs = performance.now() - t0
    return { pageVariant, durationMs }
}

function buildServerTimingHeader({ computeMs, readMs, pageVariant }) {
    const safeDesc = pageVariant.replace(/[^\w.-]/g, '_')
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
    return [
        `compute;dur=${computeMs.toFixed(2)};desc="${safeDesc}"`,
        `read;dur=${readMs.toFixed(2)}`,
    ].join(', ')
}

async function sendBuildIndexWithTiming(req, res, next) {
    try {
        const { pageVariant, durationMs: computeMs } = await runPageComputation(req)

        const tRead = performance.now()
        const html = await fs.readFile(INDEX_HTML, 'utf8')
        const readMs = performance.now() - tRead

        res.set('Server-Timing', buildServerTimingHeader({ computeMs, readMs, pageVariant }))
        // Example of non-Timing dynamic metadata (visible in DevTools → Network → Headers).
        res.set('X-Page-Variant', pageVariant)

        res.type('html').send(html)
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.status(404).type('text').send('build/index.html not found — run `npm run build` in the app root.')
            return
        }
        next(err)
    }
}

const allRoutes = (app) => {
    // CRA emits absolute paths (/static/..., /manifest.json, …). Serve `build/` at site root
    // so those URLs work without editing index.html or PUBLIC_URL.
    // app.use(express.static(BUILD_DIR, { index: false }))

    // HTML entry under a prefix: add Server-Timing + custom headers from server computation.
    app.get(
        ['/static-website-hosting', '/static-website-hosting/', '/static-website-hosting/index.html'],
        sendBuildIndexWithTiming
    )

    // Other files under the same prefix (e.g. /static-website-hosting/robots.txt)
    // why do i get 404 when i dont use /static-website-hosting/* ?
    // would like to deep dive into express.static() some day recently.
    app.use('/static-website-hosting', express.static(BUILD_DIR, { index: false }))
}

module.exports = allRoutes
