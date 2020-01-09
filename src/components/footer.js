import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="left">© 2019 Namia - Mika Minkkinen</div>

    <div className="right">
      <Link to="/page-2/">About</Link>
    </div>
  </footer>
)

export default Footer
