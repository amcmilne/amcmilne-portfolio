import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import content from '../content/config'
import { FC } from 'react'

const Stack: FC = () => {
  return (
    <div
      className={`flex items-center justify-center flex-col`}
      style={{ background: '#eee' }}
      id="stack"
    >
      <h1
        className={`text-hero text-center font-['Montserrat'] mt-1 mb-1 text-blue-steele p-5 m-1`}
      >
        Tech Stack
      </h1>
      <p className={`mb-10 mt-10 text-center text-xl md:text-2xl font-body`}>
        {content.stack.desc}.
      </p>
      <div>
        <div className={`flex flex-wrap justify-center px-15 py-15`}>
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl ml-1 mr-1 rounded-xl flex justify-center items-center p-5 m-2 ${
                index % 0 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              } `}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Stack
