import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import HeadingTitle from '../HeadingTitle'
import handleScrollReveal from '../../utils/sr'

const Home = (): JSX.Element => {
  const container = useRef<HTMLElement>(null)

  useEffect(() => {
    handleScrollReveal(container)
  }, [container])

  return (
    <section ref={container} id="about" className="block pb-20">
      <HeadingTitle
        variant="h3"
        className="mb-4"
        title="About me"
      ></HeadingTitle>

      <div className="flex items-center">
        <div className="content grid gap-10">
          <div>
            <p>
              I started my life in this environment when I was 18 years old. In
              an advertising agency, I was responsible for creating graphic
              materials for websites and social networks. Over time, I started
              to enjoy programming more and more to see and deal with it every
              day. That&quot;s when I decided to pursue a career in the area.
            </p>

            <p>
              A year later, at 19, I took the first steps towards the future I
              imagined, I left my job at the agency and started developing
              projects that would serve to make the world a little simpler.
            </p>

            <p>
              In short: I like challenges, &quot;impossible&quot; things to
              solve. I believe in the power of well-written code and an awesome
              interface solve most problems and guide people to the right path.
            </p>

            <p>
              Here are some technologies I&quot;ve been working with recently:
            </p>
            <ul className="skills">
              <li>React.js</li>
              <li>Vue.js</li>
              <li>PHP (Laravel)</li>
              <li>Mysql</li>
              <li>Javascript(ES6+)</li>
              <li>Sass</li>
            </ul>
          </div>
          <div className="image-wrapper ">
            <div className="image">
              <Image
                className="rounded-md"
                src="/images/me.jpg"
                width="320"
                height="320"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
