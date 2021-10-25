import { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import { Client, manageLocal } from '../utils/prismicHelpers'
import { useUserContext } from '../hooks/user'

const Home = ({ bio }): JSX.Element => {
  const { setBio } = useUserContext()

  useEffect(() => {
    setBio(bio)
  }, [bio, setBio])

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

  const bio = (await client.getSingle(
    'bio',
    ref ? { ref, lang: locale } : { lang: locale },
  )) || { data: {} }
  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)
  const { data } = bio
  return {
    props: {
      bio: data,
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
