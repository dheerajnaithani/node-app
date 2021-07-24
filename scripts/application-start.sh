set -e
mkdir -p /opt/xeniuser/node-app
cd /opt/xeniuser/node-app
/usr/local/bin/pm2 start src/bin/start-server.js --name "node-app"
