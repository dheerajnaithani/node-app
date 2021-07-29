const createExpressApp = require('./app/express')
const createConfig = require('./config')
const envConfig = require('./env')
const logger = require('./app/utils/logger')

const config = createConfig({ env: envConfig })
const app = createExpressApp({ config })

function signalAppStart() {
  logger.info(`${envConfig.appName} Started on port ${envConfig.port}`)
}

function start() {
  app.listen(envConfig.port, signalAppStart)
}

module.exports = {
  app,
  config,
  start,
}
