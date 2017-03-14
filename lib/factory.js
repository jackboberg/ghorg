const Github = require('./github')
const Keys = require('./keys')
const Members = require('./members')

module.exports = ({ organization, token }) => {
  const state = {
    organization,
    client: Github(token)
  }

  state.members = Members(state)

  return {
    keys: Keys(state)
  }
}
