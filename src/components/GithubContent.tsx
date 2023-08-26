type LanguageNode = {
  name: string
}

export type RepoNode = {
  projectsUrl: string
  id: string
  name: string
  description: string
  languages: {
    nodes: LanguageNode[]
  }
  openGraphImageUrl: string
}

type GitHubContentProps = {
  repos: RepoNode[]
}

const GitHubContent = ({ repos }: GitHubContentProps) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center flex-col`}
      style={{ background: '#5F9EA0' }}
      id="myrepos"
    >
      <h1
        className={`text-hero text-center font-body mb-12 mt-12 text-gray-300`}
      >
        Projects
      </h1>
      <div className={`container mx-auto`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          {repos.map((repo) => {
            const { id, name, description, languages, openGraphImageUrl } = repo
            const displayDescription = description ? description : ''
            const hideRepo = name === 'osu-final-project'
            return (
              !hideRepo && (
                <div key={id} className={`w-full`}>
                  <div
                    className={`c-card block bg-gray-100 shadow-md hover:shadow-xl rounded-lg overflow-hidden mb-2`}
                  >
                    <div className={`relative pb-48`}>
                      {openGraphImageUrl && (
                        <img
                          className={`absolute inset-0 h-full w-full object-cover`}
                          src={openGraphImageUrl}
                          alt="repoImage"
                        />
                      )}
                    </div>
                    <div className={`p-4 text-center`}>
                      <button
                        className={`bg-blue-steele font-body px-5 py-1 text-sm md:text-4x1 uppercase text-white rounded-lg mt-2 hover:bg-gray-500 `}
                      >
                        <a
                          href={`https://github.com/amcmilne/${name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </a>
                      </button>
                      <p
                        className={`text-blue-steele text-sm md:text-4x1 font-body pt-5`}
                      >
                        {languages.nodes.map((language) => (
                          <li
                            key={language.name}
                            className={`inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                          >
                            {language.name}
                          </li>
                        ))}
                      </p>
                    </div>
                    <div>
                      <hr></hr>
                      {description && (
                        <details
                          className={`text-blue-steele text-sm md:text-4x1 font-body pt-5 ml-4 mr-4 mb-4`}
                        >
                          <summary>More...</summary>
                          <p>{displayDescription}</p>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GitHubContent
