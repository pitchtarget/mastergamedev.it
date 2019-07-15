import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { v4 } from 'uuid'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import PartnerCard from '../components/cards/partnerCard'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  partners,
  }) => {
    const filteredPartners = partners.filter(partner => partner.main)
    return (
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'left',
              flexDirection: 'column',
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                boxShadow:
                  'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {title}
            </h1>
            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                boxShadow:
                  'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {subheading}
            </h3>
          </div>
        </div>

        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">{mainpitch.description}</h3>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          {heading}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="columns is-centered" style={{overflow: "scroll"}}>
                      { filteredPartners.length > 0 && filteredPartners.map( partner => (
                          <div className="column">
                            <PartnerCard key={v4()} partner={partner}/>
                          </div>
                        ))
                      }
                    </div>
                    <Features gridItems={intro.blurbs} />
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/products">
                          See all products
                        </Link>
                      </div>
                    </div>
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest stories
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  partners: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const partnersList = data.partnersData.frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        partners={partnersList.partners}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    partnersData: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    partnersData: markdownRemark(frontmatter: { templateKey: { eq: "partners-page"}}) {
      frontmatter {
        partners {
          name
          main
          link
          altImage
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
