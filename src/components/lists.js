import React from "react"

const List = () => (
  <article>
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
  </article>
)

export default List
