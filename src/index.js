const createExpressApp = require('./app/express')
const createConfig = require('./config')
const env = require('./env')
const logger = require('./app/utils/logger')

const config = createConfig({ env })
const app = createExpressApp({ config })

function signalAppStart() {
  logger.info(`${env.appName} Started on port ${env.port}`)
}

function start() {
  app.listen(env.port, signalAppStart)
}

module.exports = {
  app,
  config,
  start,
}
