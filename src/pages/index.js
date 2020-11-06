import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our FHL project.     <a href="/static/vogd.html">Go to See demo</a> <br /></p>
    <div style={{ maxWidth: `900px`, marginBottom: `5.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/page-2/">Go to See demo</Link> <br />
    <Link to="/page-2/">Go to See demo</Link> <br /> */}

    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
