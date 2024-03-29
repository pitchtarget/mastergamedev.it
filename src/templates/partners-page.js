import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Partners from '../components/Partners'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const PartnersPageTemplate = ({
  title,
  description,
  partnersTitle,
  image,
  altImage,
  partners,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover is-small align-bottom" children/>
      <section className="has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-widescreen is-offset-1-widescreen">
              <div className="section">
                <h1 className="title is-1">{title}</h1>
                <MarkdownContent content={description}/>
              </div>
              <div className="section">
                <h2 className="title is-spaced">{partnersTitle}</h2>
                <Partners partners={partners} />
              </div>
            </div>
          </div>
        </div>
      </section>
      { !!banner && <Row data={banner} color="invert"/> }
    </>
  )
}

PartnersPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  partnersTitle: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  banner: PropTypes.object,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
}

const PartnersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'master')
  return (
    <Layout>
      <PartnersPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        partnersTitle={frontmatter.partnersTitle}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        partners={frontmatter.partners}
        banner={banner[0]}
      />
    </Layout>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    bannersData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        banners: PropTypes.array,
      }),
    }),
  }),
}

export default PartnersPage

export const masterPageQuery = graphql`
  query PartnersPage {
    markdownRemark(frontmatter: { templateKey: { eq: "partners-page"}}) {
      frontmatter {
        title
        description
        partnersTitle
        altImage
        image {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        partners {
          name
          description
          link
          altImage
          image {
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    bannersData: markdownRemark(frontmatter: { templateKey: { eq: "banners"}}) {
      frontmatter {
        banners {
          name
          title
          text
          cta
          link
          alt
          image {
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
