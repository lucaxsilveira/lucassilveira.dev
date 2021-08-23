import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export default Home
