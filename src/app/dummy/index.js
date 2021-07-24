const express = require('express')

function createHandlers() {
  function listServices(req, res, next) {
    return new Promise((resolve) => {
      const services = {
        DevTools: ['CodeBuild', 'CodePipeline', 'CodeDeploy'],
        Compute: ['Ec2', 'Batch', 'Outposts', 'Lambda'],
        MachineLearning: ['SageMaker', 'AugmentedAI'],
        Storage: ['EBS', 'EFS', 'S3', 'Backup'],
        Analytics: ['Athena', 'CloudSearch', 'ElasticSearch', 'EMR'],
      }
      resolve(services)
    })
      .then((data) => res.status(200).json({ services: data }))
      .catch(next)
  }

  return {
    listServices,
  }
}

function createListServices() {
  const handlers = createHandlers()

  const router = express.Router()

  router.route('/').get(handlers.listServices)

  return {
    handlers,
    router,
  }
}

module.exports = createListServices
