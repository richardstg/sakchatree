import React from "react"

import Header from "./header"
import Footer from "./footer"
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-serif"

import "../styles/app.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container} fluid>
      <Header />
      <div className={layoutStyles.main}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
