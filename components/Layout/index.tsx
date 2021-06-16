import React from 'react'
import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

type Props = {
  children: JSX.Element[] | JSX.Element
}
const Layout: React.FC = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Meta />
      <body>
        <Header></Header>
        <Container>{children}</Container>
        <Footer></Footer>
      </body>
    </>
  )
}

export default Layout
