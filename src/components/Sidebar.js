import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Sidebar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        id="sidebar"
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{width: "100%"}}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Master Game Dev" className="navbar-logo"/>
            </Link>
            {/* Hamburger menu */}
            <div
              className="sidebar-menu"
              onClick={() => this.toggleHamburger()}
            >
              <strong>MENU</strong>
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                style={{display: "block"}}
                data-target="navMenu"
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className={`modal ${this.state.navBarActiveClass}`}>
          <div className="modal-background" onClick={() => this.toggleHamburger()}></div>
          <div className="sidebar-list">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/school">
              School
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Sidebar
