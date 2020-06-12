import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../components/404/notFound"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404" description="Page not found." />
      <NotFound />
    </Layout>
  )
}

export default PageNotFound
