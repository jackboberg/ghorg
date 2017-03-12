const Github = require('../lib/github')
const { expect } = require('code')
const { test } = require('tap')

test('returns a client with default config', ({ end: done }) => {
  const client = Github()
  const expected = {
    version: '3.0.0',
    timeout: 5000,
    headers: { 'user-agent': 'info.jackboberg.ghorg' }
  }

  expect(client.config).to.equal(expected)
  done()
})

test('when passed a token authenticates', ({ end: done }) => {
  const client = Github('1234')
  const expected = { token: '1234', type: 'token' }

  expect(client.auth).to.equal(expected)
  done()
})

test('when not passed token does not authenticate', ({ end: done }) => {
  const client = Github()

  expect(client.auth).to.be.undefined()
  done()
})
