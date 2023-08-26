require('dotenv').config()
const env = process.env.ENV
const port = process.env.PORT || 3001
const mongoURI = process.env.MONGODB_URI
const healthMinutesGap = process.env.HEALTH_MINUTES_GAP
const apiName = process.env.API_NAME
const clientURL = process.env.CLIENT_URL

module.exports = {
  healthMinutesGap,
  clientURL,
  mongoURI,
  apiName,
  env,
  port
}
