import React from "react"
import { Container } from "reactstrap"
import { ParallaxProvider } from "react-scroll-parallax"

import Header from "./header"
import Footer from "./footer"
import "typeface-open-sans"
import "typeface-proza-libre"
import "../styles/app.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <ParallaxProvider>
      <Container className={layoutStyles.container} fluid>
        <Header />
        <div className={layoutStyles.main}>{props.children}</div>
        <Footer />
      </Container>
    </ParallaxProvider>
  )
}

export default Layout
