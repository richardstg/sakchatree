import React from "react"

import Header from "./header"
import Footer from "./footer"
import "typeface-bebas-neue"
import "typeface-roboto"

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
