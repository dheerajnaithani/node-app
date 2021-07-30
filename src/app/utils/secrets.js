const AWS = require('aws-sdk')

function fetchSecret(region, secretName) {
  const client = new AWS.SecretsManager({ region })
  return client.getSecretValue({ SecretId: secretName }, (err, data) => {
    if (err) {
      throw err
    } else {
      return data.SecretString
    }
  })
}

module.exports = fetchSecret
