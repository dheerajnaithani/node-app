const packageJson = require('../../../package.json')
const fetchSecret = require('../utils/secrets')
const fetchParameterValue = require('../utils/parameters')
const requireFromEnv = require('../utils/utils')
const logger = require('../utils/logger')

const fetchAll = (region) => [
  fetchParameterValue(region, requireFromEnv('BOOKING_DB_CONNECTION_STRING')),
  fetchParameterValue(region, requireFromEnv('BOOKING_DB_USER_NAME')),
  fetchSecret(region, requireFromEnv('BOOKING_DB_PASSWORD')),
]

logger.info('Loading server config')

function config() {
  const region = requireFromEnv('REGION')
  const results = fetchAll(region)

  const envConfig = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    version: packageJson.version,
    bookingDb: requireFromEnv('BOOKING_DB'),
    bookingDbConnectionString: results[0],
    bookingDbAppuser: results[1],
    bookingDbAppPwd: results[2],
  }
  return envConfig
}

module.exports = config
