const logger = require('../utils/logger')

// eslint-disable-next-line no-unused-vars
function catchAllErrorHandler(err, req, res, next) {
  const traceId = req.context ? req.context.traceId : 'none'

  logger.error(traceId)

  res.status(500).send('error')
}

module.exports = catchAllErrorHandler
