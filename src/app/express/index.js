const express = require('express')

const mountMiddleware = require('./mount-middleware')

const mountRoutes = require('./mount-routes')

function createExpressApp({config, env}) {
    const app = express()

    mountMiddleware(app, env)
    mountRoutes(app, config)
    return app
}

module.exports = createExpressApp
