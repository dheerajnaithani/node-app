const logger = require('../utils/logger')

function catchAllErrorHandler(err, req, res) {
  const traceId = req.context ? req.context.traceId : 'none'

  logger.error(traceId)

  res.status(500).send('error')
}

module.exports = catchAllErrorHandler
