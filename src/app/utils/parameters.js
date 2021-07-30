const AWS = require('aws-sdk')
const logger = require('./logger')

async function fetchParameterValue(region, parameterName) {
  const client = new AWS.SSM({ region })

  const data = await client.getParameter({ Name: parameterName }).promise()
  logger.info(`${parameterName} is ${data.Parameter.Value}`)
  return data.Parameter.Value
}

module.exports = fetchParameterValue
