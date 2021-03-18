const express  = require ('express')

module.exports = {
    listServices: (request, response ) =>{
        const services = {
            "DevTools": ["CodeBuild","CodePipeline","CodeDeploy"],
            "Compute" : ["Ec2","Batch","Outposts","Lambda"],
            "MachineLearning" : ["SageMaker","AugmentedAI"],
            "Storage" : ["EBS","EFS","S3","Backup"],

        }
        return response.status(200).json({services:services})
    }
}