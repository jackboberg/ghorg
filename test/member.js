const Member = require('./fixtures/member')
const Members = require('../lib/members')
const Sinon = require('sinon')
const { expect } = require('code')
const { test } = require('tap')

const getMembers = Sinon.stub()

const state = {
  organization: 'testOrg',
  client: {
    orgs: { getMembers }
  }
}

const getInstance = () => {
  getMembers.reset()
  getMembers.yields(new Error('getMembers'))

  return Members(state)
}

test('yields an array of members', ({ end: done }) => {
  const subject = getInstance()
  const member = Member()

  getMembers.yields(null, { data: [member] })

  subject((err, members) => {
    expect(err).to.be.null()
    expect(members).to.include(member)

    done()
  })
})

test('yields errors from github', ({ end: done }) => {
  const subject = getInstance()
  const error = new Error('github failed')

  getMembers.yields(error)

  subject((err, members) => {
    expect(err).to.equal(error)
    expect(members).to.not.exist()

    done()
  })
})
