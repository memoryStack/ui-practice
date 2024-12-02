const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    }
});

console.log('@@@@@ xx', path.join(__dirname, '../build'))

app.use(express.static(path.join(__dirname, '../build')));

// app.use((req, res) => {
//     res.status(200).send('Hello, world!');
// });
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
