import React from "react"

const Codebox = () => (
  <article>
    <section>
      <h1>Code examples</h1>
      <code>
        <pre>
          sudo ipfw pipe 1 config bw 256KByte/s sudo ipfw add 1 pipe 1 src-port
          3000
        </pre>
      </code>
    </section>

    <section>
      <samp>
        <pre>
          /Sites/html master ☠ ☢ $ <kbd>ls -gto</kbd>
          total 104 -rw-r--r-- 1 10779 Jun 5 16:24 index.html -rw-r--r-- 1 1255
          Jun 5 16:00 _config.yml drwxr-xr-x 11 374 Jun 5 15:57 _site -rw-r--r--
          1 1597 Jun 5 14:16 README.md drwxr-xr-x 5 170 Jun 5 14:15 _sass
          -rw-r--r-- 1 564 Jun 4 15:59 Rakefile drwxr-xr-x 6 204 Jun 4 15:59
          _includes drwxr-xr-x 4 136 Jun 4 15:59 _layouts drwxr-xr-x 3 102 Jun 4
          15:59 _resources drwxr-xr-x 3 102 Jun 4 15:59 css -rw-r--r-- 1 1977
          Jun 4 15:59 favicon.icns -rw-r--r-- 1 6518 Jun 4 15:59 favicon.ico
          -rw-r--r-- 1 1250 Jun 4 15:59 touch-icon-ipad-precomposed.png
          -rw-r--r-- 1 2203 Jun 4 15:59 touch-icon-ipad-retina-precomposed.png
          -rw-r--r-- 1 1046 Jun 4 15:59 touch-icon-iphone-precomposed.png
          -rw-r--r-- 1 1779 Jun 4 15:59 touch-icon-iphone-retina-precomposed.png
        </pre>
      </samp>
    </section>
  </article>
)

export default Codebox
