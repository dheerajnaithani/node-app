const {v4: uuidv4 }  = require('uuid');

function uniqueRequestContext(req, res, next) {
    req.context = {
        traceId: uuidv4()
    }
    next()
}

module.exports = uniqueRequestContext