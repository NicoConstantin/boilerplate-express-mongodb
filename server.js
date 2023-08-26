const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./src/routes')
const app = express()
const { port, env, apiName } = require('./src/config/config')
const runDB = require('./src/db/db.config')
const setHeaders = require('./src/middlewares/setHeaders')
const errorHandler = require('./src/middlewares/errorHandler')

app.name = apiName
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Routing
app.use(setHeaders)
app.use('', router)
app.use(errorHandler)

runDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`${apiName} API Running | PORT:${port} | ENV:${env}`)
    })
  })
  .catch(e => console.log(e))
