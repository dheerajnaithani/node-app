// global environment
const commonEnv = {
  local: {
    ENV_NAME: 'local',
    APP_NAME: 'Test Application',
    PORT: 3000,
  },
  dev: {
    ENV_NAME: 'dev',
    APP_NAME: 'Dev Test Application',
    PORT: 3000,
  },
  prod: {
    ENV_NAME: 'prod',
    APP_NAME: 'Test Application',
    PORT: 3000,
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
