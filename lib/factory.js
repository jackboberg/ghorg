const Github = require('./github')
const Keys = require('./keys')

module.exports = ({ organization, token }) => {
  const ghorg = {
    organization,
    client: Github(token)
  }

  return {
    keys: Keys(ghorg)
  }
}
