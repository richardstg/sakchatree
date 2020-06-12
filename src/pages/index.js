import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/index/intro"
import About from "../components/index/about"
import Training from "../components/index/train"
import Fight from "../components/index/fight"
import Find from "../components/index/find"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Sakchatree is a family-style gym on the east side of Chiang
        Mai, with a relaxed and friendly atmosphere."
      />
      <Intro />
      <About />
      <Training />
      <Fight />
      <Find />
    </Layout>
  )
}

export default IndexPage
