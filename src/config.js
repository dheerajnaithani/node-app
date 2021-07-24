const createListServices = require('./app/dummy')

function createConfig({ env }) {
  const listServices = createListServices()
  return {
    env,
    listServices,
  }
}

module.exports = createConfig
