const AWS = require('aws-sdk')

function fetchSecret(region, secretName) {
  const client = new AWS.SecretsManager({ region })
  return new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.SecretString)
      }
    })
  })
}

module.exports = fetchSecret
