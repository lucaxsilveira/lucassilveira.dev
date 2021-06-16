import React from 'react'
import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
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
