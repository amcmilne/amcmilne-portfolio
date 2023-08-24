import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialBar = () => {
  return (
    <div
      style={{
        background: '#F5FFFA',
      }}
      id="mysocial"
    >
      <div className={`flex items-center justify-center bg-gray-300`}>
        <p className={`text-xl font-body text-blue-steele`}>Follow Me</p>
        <a
          href="https://github.com/amcmilne"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6`}
          id="github social"
        >
          <FontAwesomeIcon
            className={`animate-pulse inline-block`}
            icon={faGithub}
            size="4x"
            color="#DAA520"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/amcmilneptaat"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6`}
          id="linkedin social"
        >
          <FontAwesomeIcon
            className={`animate-pulse inline-block`}
            icon={faLinkedin}
            size="4x"
            color="#40E0D0"
          ></FontAwesomeIcon>
        </a>
        <p className={`text-xl font-body text-blue-steele`}>
          There is More to Come!
        </p>
      </div>
      <h2 className={`text-l font-body text-blue-steele text-center`}>
        Copyright 2021
      </h2>
    </div>
  )
}

export default SocialBar
