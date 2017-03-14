const Uuid = require('uuid/v4')

module.exports = (props) => {
  const id = Uuid().split('-').pop()
  const key = `ssh-rsa ${Uuid()}`

  return Object.assign({ id, key }, props)
}
