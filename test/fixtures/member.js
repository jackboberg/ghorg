const Uuid = require('uuid/v4')

const defaults = {
  gravatar_id: '',
  type: 'User',
  site_admin: false
}

module.exports = (props) => {
  const [ id, login ] = Uuid().split('-') // generate random id and login
  const member = Object.assign({ id, login }, defaults, props)

  return Object.assign({
    avatar_url: `https://avatars3.githubusercontent.com/u/${member.id}?v=3`,
    url: `https://api.github.com/users/${member.login}`,
    html_url: `https://github.com/${member.login}`,
    followers_url: `https://api.github.com/users/${member.login}/followers`,
    following_url: `https://api.github.com/users/${member.login}/following{/other_user}`,
    gists_url: `https://api.github.com/users/${member.login}/gists{/gist_id}`,
    starred_url: `https://api.github.com/users/${member.login}/starred{/owner}{/repo}`,
    subscriptions_url: `https://api.github.com/users/${member.login}/subscriptions`,
    organizations_url: `https://api.github.com/users/${member.login}/orgs`,
    repos_url: `https://api.github.com/users/${member.login}/repos`,
    events_url: `https://api.github.com/users/${member.login}/events{/privacy}`,
    received_events_url: `https://api.github.com/users/${member.login}/received_events`
  }, member)
}
