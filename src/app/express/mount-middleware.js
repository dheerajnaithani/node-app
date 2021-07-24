const attachLocals = require('./attach-locals')
const catchAllErrorHandler = require('./catch-all-error-handler')
const uniqueRequestContext = require('./requestid-context')

function mountMiddleWare(app) {
  app.use(catchAllErrorHandler)
  app.use(uniqueRequestContext)
  app.use(attachLocals)
}

module.exports = mountMiddleWare
