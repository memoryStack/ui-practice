
const allRoutes = (app) => {

    app.post('/login-jwt', function(req, res){
        res.status(200).send({ message: 'Login successful' });
    })
}

module.exports = allRoutes