const { test } = require('tap')
const { expect } = require('code')

const Ghorg = require('..')

const opts = {
  organization: 'test',
  token: '1234'
}

test('yields an object', ({ end: done }) => {
  const ghorg = Ghorg(opts)

  expect(ghorg).to.be.an.object()
  done()
})

test('exposes expected functions', ({ end: done }) => {
  const ghorg = Ghorg(opts)
  const expected = ['keys']

  expected.forEach((key) => {
    expect(ghorg[key]).to.be.a.function()
  })

  done()
})
