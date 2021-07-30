const createEnvironment = require('./app/env')

const envConfig = createEnvironment().createEnvironmentConfig(
  process.env.ENV_NAME,
)()

module.exports = envConfig
