import { Link as ScrollLink } from 'react-scroll'
import content from '../content/config'

const NavBar = () => {
  return (
    <div
      style={{
        background: '#F5FFFA',
      }}
      className={`font-display fixed top-0 w-screen z-40`}
    >
      <div className={`flex items-center w-10/12 mx-auto py-3`}>
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
