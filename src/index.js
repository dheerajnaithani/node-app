const createExpressApp = require('./app/express')
const createConfig = require('./config')
const env = require('./env')
const logger = require('./app/utils/logger')

const config = createConfig({ env })
const app = createExpressApp({ config, env })

function start() {
  app.listen(env.port, signalAppStart)
}

function signalAppStart() {
  logger.info(`${env.appName} Started on port ${env.port}`)
}

module.exports = {
  app,
  config,
  start,
}
