require('dotenv').config(); // Load .env file

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

const sleep = () => {
    return new Promise((r) => {
        setTimeout(r, 3000)
    })
}

// app.use(express.static(path.join(__dirname, '../build')))

// app.use((req, res) => {
//     res.status(200).send('Hello, world!');
// });
// Start the server

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

function createServer() {
    return app
}

const server = createServer()

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
