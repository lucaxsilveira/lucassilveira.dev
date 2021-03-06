import React, { useEffect, useState } from 'react'
import Container from './Container'
import Header from './Header'
// import Footer from './Footer'
import Meta from './Meta'

type Props = {
  children: JSX.Element[] | JSX.Element
}
const Layout: React.FC = ({ children }: Props): JSX.Element => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (
      localStorage['@lucassilveira:theme'] === 'dark' ||
      (!localStorage['@lucassilveira:theme'] &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark')
    }

    setLoaded(true)
  }, [])

  return loaded ? (
    <div className="dark:bg-dark-background">
      <Meta />
      <Header></Header>
      <Container>{children}</Container>
      {/* <Footer></Footer> */}
    </div>
  ) : null
}

export default Layout
