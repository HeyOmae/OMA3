export interface Release {
  url: `https://api.github.com/repos/HeyOmae/OMA3/releases/${number}`
  assets_url: `https://api.github.com/repos/HeyOmae/OMA3/releases/${number}/assets`
  upload_url: `https://uploads.github.com/repos/HeyOmae/OMA3/releases/${number}/assets{?name,label}`
  html_url: `https://github.com/HeyOmae/OMA3/releases/tag/${string}`
  id: number
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: `https://avatars.githubusercontent.com/u/${number}?v=${number}`
    gravatar_id: string
    url: `https://api.github.com/users/${string}`
    html_url: `https://github.com/${string}`
    followers_url: `https://api.github.com/users/${string}/followers`
    following_url: `https://api.github.com/users/${string}/following{/other_user}`
    gists_url: `https://api.github.com/users/${string}/gists{/gist_id}`
    starred_url: `https://api.github.com/users/${string}/starred{/owner}{/repo}`
    subscriptions_url: `https://api.github.com/users/${string}/subscriptions`
    organizations_url: `https://api.github.com/users/${string}/orgs`
    repos_url: `https://api.github.com/users/${string}/repos`
    events_url: `https://api.github.com/users/${string}/events{/privacy}`
    received_events_url: `https://api.github.com/users/${string}/received_events`
    type: "User"
    site_admin: boolean
  }
  node_id: string
  tag_name: string
  target_commitish: "main"
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: unknown[]
  tarball_url: `https://api.github.com/repos/HeyOmae/OMA3/tarball/${string}`
  zipball_url: `https://api.github.com/repos/HeyOmae/OMA3/zipball/${string}`
  body: string
}

export type Releases = Release[]
