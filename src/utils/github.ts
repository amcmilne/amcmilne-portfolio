const baseURL = (repo: string[]) =>
  `https://api.github.com/users/amcmilne/${repo}/branches?isFork=false`

export default baseURL
