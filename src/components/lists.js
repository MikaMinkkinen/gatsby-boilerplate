import React from "react"

const List = () => (
  <article>
    <section className="list">
      <div className="list__unordered">
        <h2>Unordered list</h2>
        <ul>
          <li>Orange</li>
          <li>Apple</li>
          <li>Rhubarb</li>
          <li>Rasberry</li>
          <li>Blueberry</li>
          <li>Cherry</li>
        </ul>
      </div>

      <div className="list__ordered">
        <h2>Ordered list</h2>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
          <li>Fifth</li>
          <li>Sixth</li>
        </ol>
      </div>

      <div className="list__definition">
        <h2>Definition list</h2>
        <dl>
          <dt>Kick</dt>
          <dd>808</dd>
          <dt>Snare</dt>
          <dd>909</dd>
        </dl>
      </div>
    </section>
  </article>
)

export default List
