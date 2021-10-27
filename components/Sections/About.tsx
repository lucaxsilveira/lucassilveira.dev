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
    <section ref={container} id="about" className="block pb-20">
      <HeadingTitle
        variant="h3"
        className="mb-4"
        title="About me"
      ></HeadingTitle>

      <div className="flex items-center">
        <div className="content grid gap-10">
          <div>
            {RichText.render(bio.text)}

            <p>
              Here are some technologies I&quot;ve been working with recently:
            </p>
            <ul className="skills">
              {bio.techs.map(({ tech }: Tech) => (
                <li key={RichText.asText(tech)}>{RichText.render(tech)}</li>
              ))}
            </ul>
          </div>
          <div className="image-wrapper ">
            <div className="image">
              <Image
                className="rounded-md"
                width="320"
                height="320"
                priority
                alt={bio?.photo?.alt}
                src={bio?.photo?.url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
