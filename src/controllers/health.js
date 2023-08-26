const { healthMinutesGap } = require('../config/config')
const { requestInLastMinutes } = require('../utils/health')

const getHealth = (req, res) => {
  const minutesToCheck = healthMinutesGap || 5

  const healthStatus = {
    status: 'OK',
    timestamp: new Date().toLocaleString(),
    uptime: process.uptime(),
    [`requestInLast${minutesToCheck}Minutes`]: requestInLastMinutes(minutesToCheck)
  }

  res.status(200).send(healthStatus)
}

module.exports = {
  getHealth
}
