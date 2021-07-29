// global environment
const commonEnv = {
  local: {
    ENV_NAME: 'local',
    APP_NAME: 'Test Application',
    PORT: 3000,
    BOOKING_DB: 'xeni-db-dev',
  },
  dev: {
    NODE_ENV: 'development',
    ENV_NAME: 'dev',
    APP_NAME: 'Dev Test Application',
    PORT: 3000,
    BOOKING_DB_CONNECTION_STRING:
      '/dev/xeniapp-cluster-dev/xeniapp-dev/connection-string/standard_srv',
    BOOKING_DB_USER_NAME: '/dev/xeniapp-cluster-dev/xeniapp-dev/app-user',
    BOOKING_DB_PASSWORD:
      '/dev/xeniapp-cluster-dev/xeniapp-dev/app-user-password',
    REGION: 'us-east-1',
    BOOKING_DB: 'xeni-db-dev',
  },
  prod: {
    NODE_ENV: 'production',
    ENV_NAME: 'prod',
    APP_NAME: 'Test Application',
    PORT: 3000,
    BOOKING_DB: 'xeni-db-dev',
    BOOKING_DB_CONNECTION_STRING:
      '/prod/xeniapp-cluster-prod/xeniapp-prod/connection-string/standard_srv',
    BOOKING_DB_USER_NAME: '/prod/xeniapp-cluster-prod/xeniapp-prod/app-user',
    BOOKING_DB_PASSWORD:
      '/prod/xeniapp-cluster-prod/xeniapp-prod/app-user-password',
    REGION: 'us-east-1',
  },
}
module.exports = {
  apps: [
    {
      name: 'node-app',
      script: 'src/bin/start-server.js',
      restartDelay: 1000,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        ...commonEnv.dev,
      },
      env_production: {
        ...commonEnv.prod,
      },
    },
  ],
}
