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
  image,
  altImage,
  serviceTitle,
  paragraphs,
  services,
}) => {
  const topParagraphs = paragraphs.length > 0 && paragraphs.slice(1,4)
  const bottomParagraphs = paragraphs.length > 0 && paragraphs.slice(4)

  return (
    <>
      <Image src={image} alt={altImage} styles="cover is-small" children/>
      <section className="section has-background-white">
        <div className="container">
          <div className="columns is-tablet">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-1">{title}</h1>
              </div>
              <div className="section">
                <h3 className="title is-3 is-spaced">{paragraphs[0].title}</h3>
                <p>{paragraphs[0].description}</p>
              </div>
              <div className="columns is-multiline is-tablet">
                { topParagraphs.length > 0 && topParagraphs.map((paragraph, id) => (
                    <div key={v4()} className={`column is-10 ${id % 2 ? 'is-offset-2' : ''}`} >
                      <div className="section is-small">
                        <h3 className="title is-3 is-spaced">{paragraph.title}</h3>
                        <p>{paragraph.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium has-background-primary">
        <div className="container">
          <h2 className="title is-2">{serviceTitle}</h2>
          <div className="columns is-multiline is-centered">
            { services.length > 0 && services.map( service => (
                <div key={v4()} className="column is-4-tablet is-2-desktop is-1-fullhd has-text-centered">
                  <Image src={service.image} alt={service.alt} styles="is-96x96 image--tag" rounded/>
                  <h4 className="title is-5" style={{marginTop: '1rem'}}>{service.heading}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="section has-background-white">
        <div className="container">
          <div className="columns is-tablet">
            <div className="column is-10 is-offset-1">
              <div className="columns is-multiline is-tablet">
                { bottomParagraphs.length > 0 && bottomParagraphs.map((paragraph, id) => (
                    <div key={v4()} className={`column is-10 ${id % 2 ? 'is-offset-2' : ''}`} >
                      <div className="section is-small">
                        <h3 className="title is-3 is-spaced">{paragraph.title}</h3>
                        <p>{paragraph.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <BlogRoll />
        </div>
      </div>
    </>
  )
}

MasterPageTemplate.propTypes = {
  title: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        altImage={frontmatter.altImage}
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altImage
        serviceTitle
        paragraphs {
          title
          description
        }
        services {
          heading
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
