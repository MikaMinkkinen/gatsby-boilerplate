import React from "react"

const Tables = () => (
  <article>
    <section>
      <h1>Tables</h1>

      <table>
        <caption>This is a caption for a table</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Table footer info</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>#999-32ac</td>
            <td>First Name</td>
            <td>13 May, 2013</td>
            <td>999 Spruce Lane, Somewhere, CA 94101</td>
          </tr>
          <tr>
            <td>#888-32dd</td>
            <td>Sample Name</td>
            <td>17 May, 1984</td>
            <td>999 Spruce Lane, Somewhere, CA 94101</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
)

export default Tables
