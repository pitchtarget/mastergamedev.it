import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import BlogRoll from '../components/BlogRoll'
import { v4 } from 'uuid'

export const MasterPageTemplate = ({
  title,
  serviceTitle,
  paragraphs,
  services,
}) => {
  const topParagraphs = paragraphs.length > 0 && paragraphs.slice(0,3)
  const bottomParagraphs = paragraphs.length > 0 && paragraphs.slice(3)

  return (
    <div className="content">
      <section className="">
        <div className="container">
          <h1>{title}</h1>
          { topParagraphs.length > 0 && topParagraphs.map( paragraph =>(
              <div key={v4()} className="section">
                <h3>{paragraph.title}</h3>
                <p>{paragraph.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="">
        <div className="container">
          <h2>{serviceTitle}</h2>
          <div className="columns is-multiline is-vcentered is-centered">
            { services.length > 0 && services.map( service =>(
                <div key={v4()} className="column is-4-tablet is-2-desktop is-1-fullhd has-text-centered">
                  <Image src={service.image} alt={service.alt} styles="is-96x96" rounded/>
                  <h4>{service.heding}</h4>
                  <p><small>{service.subheading}</small></p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          { bottomParagraphs.length > 0 && bottomParagraphs.map( paragraph =>(
              <div key={v4()} className="section">
                <h3>{paragraph.title}</h3>
                <p>{paragraph.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <div className="container">
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </div>
  )
}

MasterPageTemplate.propTypes = {
  title: PropTypes.string,
  serviceTitle: PropTypes.string,
  paragraphs: PropTypes.array,
  services: PropTypes.array,
}

const MasterPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MasterPageTemplate
        title={frontmatter.title}
        serviceTitle={frontmatter.serviceTitle}
        paragraphs={frontmatter.paragraphs}
        services={frontmatter.services}
      />
    </Layout>
  )
}

MasterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MasterPage

export const masterPageQuery = graphql`
  query MasterPage {
    markdownRemark(frontmatter: { templateKey: { eq: "master-page"}}) {
      frontmatter {
        title
        serviceTitle
        paragraphs {
          title
          description
        }
        services {
          heading
          subheading
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 100, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
