const dotenv = require('dotenv')
const requireFromEnv = require('../utils/utils')
const packageJson = require('../../../package.json')
const logger = require('../utils/logger')

logger.info('Loading local config from .env')

function config() {
  const envResult = dotenv.config()
  if (envResult.error) {
    logger.error(`[ERROR] env failed to load: ${envResult.error}`)
    process.exit()
  }
  const envConfig = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    version: packageJson.version,
    bookingDb: requireFromEnv('BOOKING_DB'),
    bookingDbConnectionString: requireFromEnv('BOOKING_DB_CONNECTION_STRING'),
    bookingDbAppuser: requireFromEnv('BOOKING_DB_USER_NAME'),
    bookingDbAppPwd: requireFromEnv('BOOKING_DB_USER_NAME'),
  }
  return envConfig
}

module.exports = config
