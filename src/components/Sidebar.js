import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Sidebar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      yPosition: null,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      yPosition: scrolled,
    })
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
    const { yPosition } = this.state
    const sidebarBg = yPosition > 0 ? "has-background" : ""

    return (
      <nav
        id="sidebar"
        className={`navbar is-fixed-top ${sidebarBg}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{width: "100%"}}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Master Game Development" className="navbar-logo"/>
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
            <Link className="navbar-item" to="/collaborazioni">
              Collaborazioni
            </Link>
            <Link className="navbar-item" to="/docenti">
              Docenti
            </Link>
            <Link className="navbar-item" to="/studenti">
              Studenti
            </Link>
            <Link className="navbar-item" to="/master">
              Master
            </Link>
            <Link className="navbar-item" to="/programma">
              Programma
            </Link>
            <Link className="navbar-item" to="/master/#iscrizioni">
              Iscrizioni
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contatti">
              Contatti
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Sidebar
