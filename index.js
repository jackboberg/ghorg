const Assert = require('assert')
const Github = require('./lib/github')
const Keys = require('./lib/keys')
const Members = require('./lib/members')

const isString = (v) => (typeof v === 'string' || v instanceof String)

module.exports = ({ organization, token } = {}) => {
  Assert(isString(organization), '`organization` must be a String')
  if (token) Assert(isString(token), '`token` must be a String')

  const state = {
    organization,
    client: Github(token)
  }

  state.members = Members(state)

  return {
    keys: Keys(state)
  }
}
