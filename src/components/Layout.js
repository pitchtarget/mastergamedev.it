import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../styles/all.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/img/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

        <body className="has-navbar-fixed-top"/>
      </Helmet>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="main">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default TemplateWrapper
