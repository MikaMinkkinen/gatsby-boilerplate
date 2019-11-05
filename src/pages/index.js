import React from "react"

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

    <Typography />

    <div className="col-2">
      <Typography emphasizeClass="muted" />
      <Typography emphasizeClass="high-emphasize" />
    </div>

    <List />
    <Form />
    <Tables />
    <Button />
    <Codebox />
    <Progressbar />

    <figure>
      <img src="http://placekitten.com/g/2000/600" alt="Figure Example" />
      <figcaption>
        Photo of the sky at night. Original by{" "}
        <a href="http://flickr.com/photos/heyitsadam/">@mrmrs</a>
      </figcaption>
    </figure>

    <Other />
    <Image />
  </Layout>
)

export default IndexPage
