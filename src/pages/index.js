import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Typography from "../components/typography"
import Form from "../components/forms"
import Tables from "../components/tables"
import Progressbar from "../components/progressbars"
import Button from "../components/buttons"
import Codebox from "../components/codeboxes"
import List from "../components/lists"
import Other from "../components/others"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <Typography />
    </div>

    <div>
      <Typography emphasizeClass="muted" />
    </div>

    <div>
      <Typography emphasizeClass="high-emphasize" />
    </div>

    <div>
      <List />
    </div>

    <div>
      <Form />
    </div>

    <div>
      <Button />
    </div>

    <div>
      <Codebox />
    </div>

    <div>
      <Progressbar />
    </div>

    <section>
      <figure>
        <img src="http://placekitten.com/g/960/320" alt="Figure Example" />
        <figcaption>
          Photo of the sky at night. Original by{" "}
          <a href="http://flickr.com/photos/heyitsadam/">@mrmrs</a>
        </figcaption>
      </figure>
    </section>

    <div>
      <Tables />
    </div>

    <div>
      <Other />
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
