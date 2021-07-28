set -e
mkdir -p /opt/xeniuser/node-app
cd /opt/xeniuser/node-app

/usr/local/bin/pm2 start src/ecosystem.config.js --env __DEPLOYMENT_ENV_NAME__
