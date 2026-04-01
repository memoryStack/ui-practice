require('dotenv').config(); // Load .env file

const express = require('express')
const compression = require('compression')
const spdy = require('spdy')
const path = require('path')
const fs = require('fs')
const app = express()

const CERT_DIR = `${__dirname}/cert`
const useSSL = process.env.SSL === 'true'

const PORT = process.env.PORT || 8080

app.use(compression())

const sleep = () => {
    return new Promise((r) => {
        setTimeout(r, 3000)
    })
}

app.use(async (req, res, next) => {

    // https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
    console.log('@@@@@@ reqqq', req.url)

    if (req.path.endsWith('serviceWorker.js')) {
        res.sendFile(path.join(__dirname, '../build', 'serviceWorker.js'))
        return
    }

    if (req.path.endsWith('offline.html')) {
        res.sendFile(path.join(__dirname, '../build', 'offline.html'))
        return
    }

    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        // const urlsToDelay = ['/static/js/lodash.js', '/static/css/main.6a8f177b.css']
        // const urlsToDelay = ['/static/js/lodash.js']
        const urlsToDelay = []
        if (urlsToDelay.includes(req.url)) {
            await sleep()
            next();
        } else next()
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    }
})

app.use(express.static(path.join(__dirname, '../build')))

// app.use((req, res) => {
//     res.status(200).send('Hello, world!');
// });
// Start the server

console.log('@@@@@@ ssl', useSSL)

function createServer() {
    if (!useSSL) return app
    return spdy.createServer({
        key: fs.readFileSync(`${CERT_DIR}/server.key`),
        cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
    }, app);
}

const server = createServer()

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log('SSL enabled')
})
