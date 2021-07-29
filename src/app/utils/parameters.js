const AWS = require('aws-sdk')
const logger = require('./logger')

async function fetchParameterValue(region, parameterName) {
  const client = new AWS.SSM({ region })
  return new Promise((resolve, reject) => {
    client.getParameter({ Name: parameterName }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        logger.info(`${parameterName} id ${data.Parameter.Value}`)
        resolve(data.Parameter.Value)
      }
    })
  })
}

module.exports = fetchParameterValue
