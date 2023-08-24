import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content/config'

const NavBar: FC = () => {
  return (
    <div
      style={{
        background: '#F5FFFA',
      }}
      className={`font-display fixed top-0 w-screen z-40`}
    >
      <div className={`flex items-center w-10/12 mx-auto py-3`}>
        <ScrollLink
          to="myrepos"
          smooth={true}
          className={`text-lg font-bold text-blue-steele flex-1 cursor-pointer`}
        >
          <h1>
            {content.nav.logo}
            <span
              className={`h-3 w-3 bg-black-500 inline-block ml-2 rounded-full`}
            ></span>
          </h1>
        </ScrollLink>

        <div className={`text-blue-steele text-xl`}>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className={`mr-4 cursor-pointer`} key={index}>
                  {link.text1}
                </span>
                <span className={`mr-4 cursor-pointer`} key={index}>
                  {link.text2}
                </span>
              </ScrollLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NavBar
