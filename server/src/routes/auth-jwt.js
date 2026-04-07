const jwt = require('jsonwebtoken')
const JWT_SECRET = "khul ja sim sim"

const allRoutes = (app) => {

    app.post('/login-jwt', function(req, res){
        const { username, password } = req.body
        if (username === 'admin' && password === 'admin') {
            const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '30s' })
            res.cookie('jwt-token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 1000
            });
            res.status(200).send({ message: 'Login successful', user: { username } })
        } else {
            res.status(401).send({ message: 'Invalid username or password' })
        }
    })

    app.get('/user-details-jwt', function(req, res){
        const token = req.cookies['jwt-token']
        if (!token) {
            res.status(401).send({ message: 'Unauthorized' })
        }
        const decoded = jwt.verify(token, JWT_SECRET)
        res.status(200).send({ message: 'User details', user: decoded })
    })

    app.get('/logout-jwt', function(req, res){
        const token = req.cookies['jwt-token']
        if (!token) {
            res.status(401).send({ message: 'Unauthorized' })
        }
        res.clearCookie('jwt-token')
        res.status(200).send({ message: 'Logged out successfully' })
    })


}

module.exports = allRoutes
