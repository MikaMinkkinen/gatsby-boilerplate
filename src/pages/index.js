import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Typography from "../components/typography"
import Forms from "../components/forms"
import Tables from "../components/tables"
import Progressbar from "../components/progressbars"
import Button from "../components/buttons"
import Codebox from "../components/codeboxes"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <Typography />
    </div>

    <div class="high-emphasize">
      <Typography />
    </div>

    <div class="muted">
      <Typography />
    </div>

    <hr />

    <section>
      <h1>Lists</h1>
      <h2>Unordered list</h2>
      <ul>
        <li>Orange</li>
        <li>Apple</li>
        <li>Rhubarb</li>
        <li>Rasberry</li>
        <li>Blueberry</li>
        <li>Cherry</li>
      </ul>
      <h2>Ordered list</h2>
      <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
        <li>Fifth</li>
        <li>Sixth</li>
      </ol>
      <h2>Definition list</h2>
      <dl>
        <dt>Kick</dt>
        <dd>808</dd>
        <dt>Snare</dt>
        <dd>909</dd>
      </dl>
      <dl>
        <dt> Maine </dt>
        <dd> Augusta </dd>
        <dt> California </dt>
        <dd> Sacremento </dd>
        <dt> Oregon </dt>
        <dd> Salem </dd>
        <dt> New York </dt>
        <dd> Albany </dd>
      </dl>
      <dl>
        <dt> Ascender </dt>
        <dd>
          {" "}
          The part of certain lowercase letters that extends above the x-height
          of a font.{" "}
        </dd>
        <dt> Font </dt>
        <dd>
          {" "}
          Traditionally, a complete set of characters for one typeface at one
          particular type size. Often used more loosely as a synonym for
          "typeface".
        </dd>
        <dt> Golden Section </dt>
        <dd>
          The ideal proportion according to the ancient Greeks. It is visualized
          as the division of a line into two unequal segments in such a way that
          the ratio of the smaller segment to the larger segment is equal to the
          ratio of the larger to the whole. It is usually defined as 21:34, that
          is, 21/34 and 34/(21+34) both equal approximately 0.618. A rectangle
          whose sides are of this proportion is called a "golden rectangle".
          Golden rectangles can be found in the proportions of the Parthenon and
          many medieval manuscripts.
        </dd>
      </dl>
    </section>

    <div>
      <Forms />
    </div>

    <div>
      <Button />
    </div>

    <div>
      <Codebox />
    </div>

    <hr />
    <section>
      <h1>Footer</h1>
      <footer>
        <ul>
          <li>
            <a href="https://google.com">Home</a>
          </li>
          <li>
            <a href="https://google.com">Contact</a>
          </li>
          <li>
            <a href="https://google.com">Jobs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://twitter.com" title=" on Twitter">
              Twitter
            </a>
          </li>
          <li>
            <a href="http://pinterest.com" title=" on Pinterest">
              Pinterest
            </a>
          </li>
          <li>
            <a href="http://instagram.com" title=" on Instagram">
              Instagram
            </a>
          </li>
          <li>
            <a href="http://dribbbble.com" title=" on Dribbble">
              Dribbble
            </a>
          </li>
          <li>
            <a href="http://github.com" title=" on Github">
              Github
            </a>
          </li>
        </ul>
      </footer>
    </section>

    <div>
      <Progressbar />
    </div>

    <section>
      <header>
        <h1>Random Stuff</h1>
      </header>
      <small>This is for things like copyright info</small>
      <s>Content that isn't accurate or relevant anymore.</s>
      <span>Generic span wrapper</span>
      <abbr>HTML How to meet ladies</abbr>
      <p>
        This is inline text with <sub>subscript</sub> and <sup>superscript</sup>{" "}
        elements.
      </p>
      <p>
        <var>f</var>(<var>x</var>) = <var>a</var>
        <sub>0</sub> + <var>a</var>
        <sub>1</sub>
        <var>x</var> +<var>a</var>
        <sub>2</sub>
        <var>x</var>
        <sup>2</sup>, where <var>a</var>
        <sup>2</sup> ≠ 0
      </p>
      <time datetime="2013-09-07" pubdate>
        07 September 2013
      </time>
    </section>

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

    <section>
      <footer>
        <small>© 2014 Some company name</small>
        <address>email@email.com</address>
      </footer>
    </section>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
