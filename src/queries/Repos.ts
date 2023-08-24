const REACT_APP_GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY || ''

const myHeaders = new Headers()
myHeaders.append('Authorization', REACT_APP_GITHUB_API_KEY)
myHeaders.append('Content-Type', 'application/json')

const graphql = JSON.stringify({
  query: `{viewer 
              {name repositories(last: 100, affiliations: OWNER, isFork: false privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) 
                {
                nodes {
                    id name openGraphImageUrl description openGraphImageUrl descriptionHTML description projectsUrl 
                    languages(first: 10) 
                    { 
                      nodes {name}
                    }
                  }
                }
              }}`,
  variables: {},
})
export const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow',
}
