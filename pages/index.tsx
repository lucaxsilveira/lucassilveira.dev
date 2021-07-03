import Image from 'next/image'
import Layout from '../components/Layout'
import HeadingTitle from '../components/HeadingTitle'
import Hero from '../components/Sections/Hero'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <section id="about" className="block pb-20">
        <HeadingTitle
          variant="h3"
          className="mb-4"
          title="About me"
        ></HeadingTitle>

        <div className="flex items-center">
          <div className="content grid gap-10">
            <div>
              <p>
                I started my life in this environment at 18 years old. In an
                advertising agency, I was responsible for creating graphic
                materials for websites and social media. Over time, I started to
                like more and more programming to see and deal with it every
                day. That&apos;s when I decided to pursue a career in the field.
              </p>

              <p>
                A year later, at 19, I took the first steps into the future I
                imagined, then I got out of my current job and started
                developing projects that serve to leave the world a little
                simpler.
              </p>

              <p>
                In a nutshell: I like challenges, things &quot;impossible&quot;
                to solve. I believe in the power of well-written code to solve
                problems and guide people to the right path.
              </p>

              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
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
    </Layout>
  )
}

export default Home
