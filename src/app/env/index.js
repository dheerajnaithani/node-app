const localConfig = require('./local.env')
const serverConfig = require('./server.env')

function environmentConfig() {
  function createEnvironment(key) {
    return key === 'dev' || key === 'prod' ? serverConfig : localConfig
  }

  return {
    createEnvironment,
  }
}

module.exports = environmentConfig
