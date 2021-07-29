const AWS = require('aws-sdk')
const logger = require('./logger')

function fetchParameterValue(region, parameterName) {
  const client = new AWS.SSM({ region })
  return new Promise((resolve, reject) => {
    client.getParameter({ Name: parameterName }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        logger.info(`${parameterName} id ${data}`)
        resolve(data)
      }
    })
  })
}

module.exports = fetchParameterValue
