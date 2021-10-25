import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import { Client, manageLocal } from '../utils/prismicHelpers'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export async function getStaticProps({
  preview,
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null
  const isPreview = preview || false
  const client = Client()

  const bio =
    (await client.getSingle(
      'bio',
      ref ? { ref, lang: locale } : { lang: locale },
    )) || {}
  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)

  return {
    props: {
      bio,
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  }
}

export default Home
