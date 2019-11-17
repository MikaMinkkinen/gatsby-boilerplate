import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="logo">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div class="navi">
      <ul>
        <li>Article</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
