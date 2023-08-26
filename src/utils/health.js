const moment = require('moment/moment')

const requestLog = []

const logRequest = (req, res, next) => {
  requestLog.push({ timestamp: moment.now() })
  next()
}

const requestInLastMinutes = (minutes) => {
  const currentTime = moment.now()
  const threshold = currentTime - minutes * 60000

  return requestLog.filter(r => r.timestamp >= threshold).length
}

module.exports = {
  logRequest,
  requestInLastMinutes
}
