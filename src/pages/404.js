import React from "react"
import { Container } from "reactstrap"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../components/404/notFound"
import layoutStyles from "../components/layout.module.scss"
import Footer from "../components/footer"

const PageNotFound = () => {
  return (
    <div className={layoutStyles.container} fluid>
      <SEO title="404" description="Page not found." />
      <div className={layoutStyles.main}>
        <NotFound />
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
