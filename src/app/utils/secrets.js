const AWS = require('aws-sdk')
const logger = require('./logger')

function fetchSecret(region, secretName) {
  const client = new AWS.SecretsManager({ region })
  return client.getSecretValue({ SecretId: secretName }, (err, data) => {
    if (err) {
      throw err
    } else {
      logger.info(`${secretName} id ${data.SecretString}`)
      return data.SecretString
    }
  })
}

module.exports = fetchSecret
