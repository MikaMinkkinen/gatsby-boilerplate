import React from "react"

const Progressbar = () => (
  <article>
    <section>
      <h1>New hawtness</h1>
      <progress value="80" max="100">
        80 %
      </progress>
      <p>
        We are this close to the goal:{" "}
        <meter min="0" max="1000" value="824">
          $824
        </meter>
        .
      </p>
    </section>
  </article>
)

export default Progressbar
