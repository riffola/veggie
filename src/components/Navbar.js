import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { active } = this.state
    return (
      <nav
        className="navbar saroj-navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Saroj Joshi">
              Saroj Joshi
            </Link>
            <div
              className={`navbar-burger burger ${active ? 'is-active' : ''}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${active ? 'is-active' : ''}`}
            style={{ background: 'rgba(26, 15, 6, 0.97)' }}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/#about">About</Link>
              <Link className="navbar-item" to="/#books">Books</Link>
              <Link className="navbar-item" to="/#awards">Awards</Link>
              <Link className="navbar-item" to="/#jewellery">Jewellery</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
