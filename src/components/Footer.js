import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import logoUnivr from '../img/logo-univr.png'
import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container is-horizontal-spaced has-text-white-ter">
            <div className="columns">
              <div className="column is-3-tablet is-2-desktop has-text-centered">
                <Link to="/" className="content footer--logo mb-2" style={{display: 'block'}}>
                  <img
                    src={logo}
                    alt="Master Game Development"
                    style={{ width: '14em', height: 'auto' }}
                  />
                </Link>
                <Link to="/" className="content footer--logo">
                  <img
                    src={logoUnivr}
                    alt="Logo università di Verona"
                    style={{ width: '8em', height: 'auto' }}
                  />
                </Link>
              </div>
              <div className="column is-2-tablet is-1-desktop is-offset-1-desktop">
                <div className="footer-list">
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/master">
                    Master
                  </Link>
                  <Link className="navbar-item" to="/programma">
                    Programma
                  </Link>
                  <Link className="navbar-item" to="/docenti">
                    Docenti
                  </Link>
                  <Link className="navbar-item" to="/collaborazioni">
                    Collaborazioni
                  </Link>
                </div>
              </div>
              <div className="column is-2-tablet is-1-desktop is-offset-1-desktop">
                <div className="footer-list">
                  <Link className="navbar-item" to="/progetti">
                    Progetti
                  </Link>
                  <Link className="navbar-item" to="/alumni">
                    Alumni
                  </Link>
                  <Link className="navbar-item" to="/blog">
                    Blog
                  </Link>
                  <Link className="navbar-item" to="/master/#iscrizioni">
                    Iscrizioni
                  </Link>
                  {<a href="mailto:gamedev@ateneo.univr.it" className="navbar-item">
                    Contatti
                  </a>}
                </div>
              </div>
              <div className="column is-4-desktop is-6-widescreen">
                  <div className="">
                    <p className="footer--info is-size-6">
                      <strong className="has-text-white">
                        Dipartimento di Informatica
                      </strong><br/>
                      Università degli studi di Verona<br/>
                      <small>
                      Strada le Grazie 15 - 37134 Verona<br/>
                      Italia<br/>
                      <a href="mailto:gamedev@ateneo.univr.it">gamedev@ateneo.univr.it</a>
                      </small>
                    </p>
                  </div>
                  <div className="social">
                    <a title="facebook" href="https://www.facebook.com/Mastergamedev-Univr-1090366591113635/">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    {/*
                    <a title="twitter" href="https://twitter.com">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>

                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="vimeo" href="https://vimeo.com">
                      <img
                        src={vimeo}
                        alt="Vimeo"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    */}

                </div>
              </div>
            </div>
          {/*
            <p>
              <a
                className="navbar-item"
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin
              </a>
            </p>
          */}
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
