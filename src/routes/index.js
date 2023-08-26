const express = require('express')
const { apiName } = require('../config/config')
const { getHealth } = require('../controllers/health')
const { logRequest } = require('../utils/health')

const router = express.Router()

router.use(logRequest)
router.get('/', (req, res) => { return res.send(`Welcome to ${apiName} API`) })
router.get('/health', getHealth)
// routes.use('/', exampleRoutes)

router.use((req, res, next) => {
  res.status(404).send('404- That endpoint doesnt exists')
})

module.exports = router
