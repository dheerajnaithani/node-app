const dotenv = require('dotenv')
const packageJson = require('../package.json')

const envResult = dotenv.config()
const logger = require('./app/utils/logger')

if (envResult.error) {
  logger.error(`[ERROR] env failed to load: ${envResult.error}`)
  process.exit()
}

function requireFromEnv(key) {
  if (!process.env[key]) {
    logger.error(`[APP ERROR] Missing env variable: ${key}`)
    return process.exit(1)
  }
  return process.env[key]
}

module.exports = {
  appName: requireFromEnv('APP_NAME'),
  env: requireFromEnv('NODE_ENV'),
  port: parseInt(requireFromEnv('PORT'), 10),
  version: packageJson.version,
}
