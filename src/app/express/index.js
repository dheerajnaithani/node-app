const express = require('express')

const mountMiddleware = require('./mount-middleware')

const mountRoutes = require('./mount-routes')

function createExpressApp({ config }) {
  const app = express()

  mountMiddleware(app)
  mountRoutes(app, config)
  return app
}

module.exports = createExpressApp
