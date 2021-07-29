const AWS = require('aws-sdk')
const logger = require('./logger')

function fetchSecret(region, secretName) {
  const client = new AWS.SecretsManager({ region })
  return new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        logger.info(`Found secret ${secretName} in secret manager`)
        resolve(data.SecretString)
      }
    })
  })
}

module.exports = fetchSecret
