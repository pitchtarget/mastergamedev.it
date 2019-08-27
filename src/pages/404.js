import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/elements/Button'

const NotFoundPage = () => (
  <Layout>
    <div className="page-404" style={{marginTop: '-6rem'}}>
      <div>
        <h1>
          <span
            className="title"
            style={{ fontSize: '8rem', fontWeight: '900', lineHeight: 1, color: 'white'
          }}>
            404
          </span>
          <br/>
          <span style={{color: 'white'}} className="title is-2">Pagina non trovata</span>
        </h1>
        <p style={{color: 'white'}} className="$subtitle is-3">
          Ti consigliamo di controllare che l'indirizzo della pagina sia corretto.<wbr/>
        </p>
        <Button text="pagina iniziale" link="/" styles="cta cta__light" />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
