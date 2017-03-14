const Ghorg = require('..')

exports.command = 'keys [team]'

exports.desc = 'Get public keys'

exports.handler = ({ organization, token, team = '*' } = {}) => {
  const ghorg = Ghorg({ organization, token })

  ghorg.keys((err, keys) => {
    if (err) console.error(err)
    else console.log(keys)
  })
}
