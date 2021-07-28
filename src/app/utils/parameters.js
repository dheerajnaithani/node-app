const AWS = require('aws-sdk')

function fetchParameterValue(region, parameterName) {
  const client = new AWS.SSM({ region })
  return new Promise((resolve, reject) => {
    client.getParameter({ Name: parameterName }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = fetchParameterValue
