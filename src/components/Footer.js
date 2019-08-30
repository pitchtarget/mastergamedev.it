import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
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
              <div className="column is-3-tablet is-2-desktop">
                <div className="content footer--logo">
                  <img
                    src={logo}
                    alt="Artigiano del caffè"
                    style={{ width: '14em', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="column is-3-tablet is-2-desktop">
                <div className="footer-list">
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/storia">
                    la Storia
                  </Link>
                  <Link className="navbar-item" to="/miscele">
                    le Miscele
                  </Link>
                </div>
              </div>
              <div className="column is-3-tablet is-2-desktop">
                <div className="footer-list">
                  <Link className="navbar-item" to="/la-buona">
                    la Buona
                  </Link>
                  <Link className="navbar-item" to="/la-migliore">
                    la Migliore
                  </Link>
                  <Link className="navbar-item" to="/la-ancora-meglio">
                    la ancora Meglio
                  </Link>
                </div>
              </div>
              {/*
                <div className="column is-2-tablet is-1-desktop is-offset-1-desktop">
                  <div className="footer-list">
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                    <Link className="navbar-item" to="/contatti">
                      Contatti
                    </Link>
                  </div>
                </div>
              */}
              <div className="column is-4-desktop is-6-widescreen">
                <div className="">
                  <p className="footer--info is-size-6">
                    <strong className="has-text-white">
                      Artigiano del caffè
                    </strong><br/>
                    Inserire i dati<br/>
                    <small >
                    Vanno aggiunti nel componente Footer
                    </small>
                  </p>
                </div>
                {/*
                  <div className="social">
                    <a title="facebook" href="https://www.facebook.com/Mastergamedev-Univr-1090366591113635/">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
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
                  </div>
                */}
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
