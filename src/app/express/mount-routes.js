function mountRoutes(app, config) {
  app.use('/', config.listServices.router)
}

module.exports = mountRoutes
