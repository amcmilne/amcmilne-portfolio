import { FC } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import content from '../content/config'
import useStartAnimation from '../hook/useStartAnimation'
import { Link as ScrollLink } from 'react-scroll'

const Header: FC = () => {
  const transition = (duration: number) =>
    `transition duration-${duration} ease-in-out`
  const styleTranslate = 'translate-y-10 opacity-0'
  const animated = useStartAnimation()
  return (
    <div
      style={{ background: '#1f2937' }}
      className={`min-h-screen flex items-center justify-center`}
      id="header"
    >
      <div
        className={`flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between`}
      >
        <div className={`w-full md:w-3/5`}>
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            className={`w-full mx-auto rounded-full`}
            effect="blur"
            placeholderSrc={content.header.alt}
          />
        </div>
        <div className={`w-full text-center md:text-left`}>
          <h2
            className={`text-hero md:text-4x1  text-white font-display transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)}`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 font-body transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)}`}
          >
            {content.header.text[2]}
            <Typewriter
              cursor
              delaySpeed={1000}
              deleteSpeed={25}
              loop
              typeSpeed={75}
              words={content.words}
            ></Typewriter>
          </h1>

          <ScrollLink to="myrepos" smooth={true}>
            <button
              className={` animate-pulse bg-blue-steele px-10 py-3 text-md uppercase text-white rounded-lg mt-10 hover:bg-indigo-400 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Header
