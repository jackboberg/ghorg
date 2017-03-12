const Github = require('github')

module.exports = (token) => {
  const client = new Github({
    version: '3.0.0',
    timeout: 5000,
    headers: { 'user-agent': 'info.jackboberg.ghorg' }
  })

  if (token) client.authenticate({ token, type: 'token' })

  return client
}
