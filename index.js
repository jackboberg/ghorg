const Assert = require('assert')
const Factory = require('./lib/factory')

const isString = (v) => (typeof v === 'string' || v instanceof String)

module.exports = ({ organization, token } = {}) => {
  Assert(isString(organization), '`organization` must be a String')
  if (token) Assert(isString(token), '`token` must be a String')

  return Factory({ organization, token })
}
