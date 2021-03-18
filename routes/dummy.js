const express = require('express')
const router = express.Router()

const services = require('../services/dummy.service')

router.get('/', services.listServices)

module.exports = router
