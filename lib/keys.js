const OS = require('os')
const Parallel = require('run-parallel')
const Waterfall = require('run-waterfall')

const keysGetter = (state) => (member) => (done) => {
  const options = { username: member.login }

  state.client.users.getKeysForUser(options, (err, keys) => {
    if (err) return done(err)

    done(null, keys.data.map((x) => x.key).join(OS.EOL))
  })
}

const combineKeys = (keys) => keys
  .filter((x) => x.length)
  .join(OS.EOL)

module.exports = (state) => (done) => {
  const getKeys = keysGetter(state)

  Waterfall([
    (next) => state.members(next),
    (members, next) => Parallel(members.map(getKeys), next),
    (keys, next) => next(null, combineKeys(keys))
  ], (err, keys) => {
    if (err) done(err)
    else done(null, keys)
  })
}
