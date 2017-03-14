module.exports = (state) => (done) => {
  const options = { org: state.organization }

  state.client.orgs.getMembers(options, (err, results) => {
    if (err) done(err)
    else done(null, results.data)
  })
}
