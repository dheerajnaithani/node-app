const dotenv = require('dotenv')
const packageJson = require('../package.json')
const fetchSecret = require('./app/utils/secrets')
const fetchParameterValue = require('./app/utils/parameters')

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

const commonProperties = {
  appName: requireFromEnv('APP_NAME'),
  env: requireFromEnv('NODE_ENV'),
  port: parseInt(requireFromEnv('PORT'), 10),
  version: packageJson.version,
  bookingDb: requireFromEnv('PORT'),
}

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') {
  const region = requireFromEnv('REGION')

  Promise.all([
    fetchParameterValue(region, requireFromEnv('BOOKING_DB_CONNECTION_STRING')),
    fetchParameterValue(region, requireFromEnv('BOOKING_DB_USER_NAME')),
    fetchSecret(region, requireFromEnv('BOOKING_DB_PASSWORD')),
  ]).then((values) => {
    module.exports = {
      ...commonProperties,
      booking_db_connection_string: values[0],
      booking_db_app_user: values[1],
      booking_db_app_password: values[2],
    }
  })
} else {
  module.exports = {
    ...commonProperties,
    booking_db_connection_string: requireFromEnv(
      'BOOKING_DB_CONNECTION_STRING',
    ),
    booking_db_app_user: requireFromEnv('BOOKING_DB_USER_NAME'),
    booking_db_app_password: requireFromEnv('BOOKING_DB_USER_NAME'),
  }
}
