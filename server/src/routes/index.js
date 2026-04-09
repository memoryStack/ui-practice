const authJwtRoutes = require('./auth-jwt')
const staticWebsiteHostingRoutes = require('./static-website-hosting')

const allRoutes = (app) => {
    authJwtRoutes(app)
    staticWebsiteHostingRoutes(app)
}

module.exports = allRoutes
