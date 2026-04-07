const authJwtRoutes = require('./auth-jwt')

const allRoutes = (app) => {
    authJwtRoutes(app)
}

module.exports = allRoutes
