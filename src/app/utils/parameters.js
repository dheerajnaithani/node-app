const AWS = require('aws-sdk')

const fetchParameterValue = (region, parameterName) => {
  const client = new AWS.SSM({ region })
  return client.getParameter({ Name: parameterName }, (err, data) => {
    if (err) {
      throw err
    } else {
      return data.Parameter.Value
    }
  })
}

module.exports = fetchParameterValue
