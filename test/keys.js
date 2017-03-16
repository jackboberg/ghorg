const Key = require('./fixtures/key')
const Keys = require('../lib/keys')
const Member = require('./fixtures/member')
const OS = require('os')
const Sinon = require('sinon')
const { expect } = require('code')
const { test } = require('tap')

let getKeysForUser

const state = {
  organization: 'testOrg',
  client: {
    users: {}
  }
}

const getInstance = () => {
  state.members = Sinon.stub()
    .yields(new Error('getMembers'))

  state.client.users.getKeysForUser = Sinon.stub()
    .yields(new Error('getKeysForUser'))
  getKeysForUser = state.client.users.getKeysForUser

  return Keys(state)
}

test('yields a string of keys', ({ end: done }) => {
  const subject = getInstance()
  const memberKeys = [ Key(), Key(), Key() ]

  state.members.yields(null, [ Member(), Member() ])
  getKeysForUser.onFirstCall().yields(null, { data: memberKeys.slice(0, 2) })
  getKeysForUser.onSecondCall().yields(null, { data: memberKeys.slice(2) })

  subject((err, keys) => {
    const lines = keys.split(OS.EOL)

    expect(err).to.be.null()
    memberKeys.every((x) => expect(lines).to.include(x.key))

    done()
  })
})

test('yields errors from github', ({ end: done }) => {
  const subject = getInstance()
  const error = new Error('github failed')

  state.members.yields(null, [ Member(), Member() ])
  getKeysForUser.onFirstCall().yields(null, { data: [ Key() ] })
  getKeysForUser.onSecondCall().yields(error)

  subject((err, keys) => {
    expect(err).to.equal(error)
    expect(keys).to.not.exist()

    done()
  })
})

test('does not error if a member has no keys', ({ end: done }) => {
  const subject = getInstance()
  const memberKeys = [ Key(), Key() ]

  state.members.yields(null, [ Member(), Member() ])
  getKeysForUser.onFirstCall().yields(null, { data: [] })
  getKeysForUser.onSecondCall().yields(null, { data: memberKeys })

  subject((err, keys) => {
    const lines = keys.split(OS.EOL)

    expect(err).to.be.null()
    memberKeys.every((x) => expect(lines).to.include(x.key))

    done()
  })
})
