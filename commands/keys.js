exports.command = 'keys [team]'

exports.desc = 'Get public keys'

exports.handler = ({ organization, team = '*' } = {}) => {
  console.log(`keys called for ${organization}:${team}`)
}
