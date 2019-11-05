import React from "react"

const Other = () => (
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

    <small>© 2014 Some company name</small>
    <address>email@email.com</address>
  </section>
)

export default Other
