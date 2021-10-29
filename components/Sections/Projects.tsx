import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import HeadingTitle from '../HeadingTitle'
import handleScrollReveal from '../../utils/sr'
import { Tech, useUserContext } from '../../hooks/user'

const About = (): JSX.Element => {
  const container = useRef<HTMLElement>(null)

  const { bio } = useUserContext()

  useEffect(() => {
    handleScrollReveal(container)
  }, [bio, container])

  return (
    <section ref={container} id="projects" className="block pb-20">
      <HeadingTitle
        variant="h3"
        className="mb-4"
        title="Projects"
      ></HeadingTitle>

      <p>Some things I had fun building</p>

      <div className="flex items-center">
        <div className="content">
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:px-0 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div className="relative z-10 col-start-1 row-start-1 lg:px-0 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none sm:pt-0">
              <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-400">
                Freelance
              </p>
              <h2 className="text-xl font-semibold dark:text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
                SolucioneRH
              </h2>
            </div>
            <div className="col-start-1 row-start-2 lg:px-0 sm:px-4 sm:pb-16">
              <div className="flex items-center text-sm my-5 sm:mt-2 sm:mb-4">
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, eum modi sit dolore at ducimus labore. Dolores vel,
                    nemo quam, corrupti voluptates quidem consequatur ad soluta
                    perspiciatis blanditiis, voluptatibus et.
                  </p>
                </div>
              </div>
              <hr className="w-16 border-gray-400 hidden sm:block" />
              <div className="tags text-xs mt-8 flex gap-2">
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
              </div>
            </div>

            <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="relative col-span-3 row-span-2 md:col-span-2">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover bg-gray-100 rounded-lg"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house-interior.13945f821153afd28151b5dac3e5d713.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house-view.bf6f10434bf4589aebba4d3c33834cc2.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:px-0 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="relative col-span-3 row-span-2 md:col-span-2">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover bg-gray-100 rounded-lg"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house-interior.13945f821153afd28151b5dac3e5d713.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="https://tailwindcss.com/_next/static/media/beach-house-view.bf6f10434bf4589aebba4d3c33834cc2.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-10 col-start-1 row-start-1 lg:px-0 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none sm:pt-0">
              <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-400">
                Freelance
              </p>
              <h2 className="text-xl font-semibold dark:text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
                SolucioneRH
              </h2>
            </div>
            <div className="col-start-1 row-start-2 lg:px-0 sm:px-4 sm:pb-16">
              <div className="flex items-center text-sm my-5 sm:mt-2 sm:mb-4">
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, eum modi sit dolore at ducimus labore. Dolores vel,
                    nemo quam, corrupti voluptates quidem consequatur ad soluta
                    perspiciatis blanditiis, voluptatibus et.
                  </p>
                </div>
              </div>
              <hr className="w-16 border-gray-400 hidden sm:block" />
              <div className="tags text-xs mt-8 flex gap-2">
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
                <div className="text-white shadow-2xl rounded-sm p-1 px-3 bg-primary">
                  React.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
