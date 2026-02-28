import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="saroj-footer">
        <div className="footer-name">Saroj Joshi</div>
        <div className="footer-tagline">Cookbook Author &amp; Jeweler</div>
        <nav className="footer-nav">
          <Link to="/#about">About</Link>
          <Link to="/#books">Books</Link>
          <Link to="/#awards">Awards</Link>
          <Link to="/#jewellery">Jewellery</Link>
        </nav>
        <div className="footer-rule"></div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Saroj Joshi &nbsp;&middot;&nbsp; SarojJoshi.com
        </div>
      </footer>
    )
  }
}

export default Footer
