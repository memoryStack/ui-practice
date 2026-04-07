require('dotenv').config(); // Load .env file
const express = require('express')
const session = require('express-session')
const cors = require('cors')

const allRoutes = require('./src/routes')

const app = express()

const PORT = process.env.PORT || 8080

// Browser app origin (e.g. CRA dev server). Required when using credentials + cookies cross-origin.
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000'

const sleep = () => {
    return new Promise((r) => {
        setTimeout(r, 3000)
    })
}

app.use(cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
}))

app.use(express.json()) // to ensure we can access user sent data via req.body

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: function(req) {
      return {
        httpOnly: true,
        secure: req.secure || false,
        maxAge: 60 * 60 * 1000
      }
    },
    name: 'sessionID'
}))

// set all the routes from files
allRoutes(app)

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body || {}
    // Session id is on req.sessionID; req.session is the per-session data object.
    req.session.user = { username }
    console.log('login sessionId:', req.sessionID, 'session data:', req.session)
    res.status(200).send({ username, password, sessionId: req.sessionID })
})

app.get('/user-details', (req, res) => {
    if (req.session.user) {
        res.status(200).send({ user: req.session.user })
    } else {
        res.status(401).send({ error: 'Unauthorized' })
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send({ error: 'Failed to logout' })
        } else {
            res.status(200).send({ message: 'Logged out successfully' })
        }
    })
})

function createServer() {
    return app
}

const server = createServer()

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
