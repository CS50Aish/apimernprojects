# apimernprojects
Projects on API MERN Stack

labuser@ubuntu2204:~/Desktop/apimernprojects$ npm init -y
Wrote to /home/labuser/Desktop/apimernprojects/package.json:

{
  "name": "apimernprojects",
  "version": "1.0.0",
  "description": "Projects on API MERN Stack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


labuser@ubuntu2204:~/Desktop/apimernprojects$ npm install axios

added 9 packages, and audited 10 packages in 3s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice 
npm notice New minor version of npm available! 10.2.4 -> 10.8.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.2
npm notice Run npm install -g npm@10.8.2 to update!
npm notice 
labuser@ubuntu2204:~/Desktop/apimernprojects$ touch index.js

labuser@ubuntu2204:~/Desktop/apimernprojects$ node index.js 
{
  login: 'CS50Aish',
  id: 104483659,
  node_id: 'U_kgDOBjpLSw',
  avatar_url: 'https://avatars.githubusercontent.com/u/104483659?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/CS50Aish',
  html_url: 'https://github.com/CS50Aish',
  followers_url: 'https://api.github.com/users/CS50Aish/followers',
  following_url: 'https://api.github.com/users/CS50Aish/following{/other_user}',
  gists_url: 'https://api.github.com/users/CS50Aish/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/CS50Aish/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/CS50Aish/subscriptions',
  organizations_url: 'https://api.github.com/users/CS50Aish/orgs',
  repos_url: 'https://api.github.com/users/CS50Aish/repos',
  events_url: 'https://api.github.com/users/CS50Aish/events{/privacy}',
  received_events_url: 'https://api.github.com/users/CS50Aish/received_events',
  type: 'User',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 31,
  public_gists: 0,
  followers: 32,
  following: 32,
  created_at: '2022-04-27T05:24:21Z',
  updated_at: '2024-07-05T10:10:44Z'
}
labuser@ubuntu2204:~/Desktop/apimernprojects$ 