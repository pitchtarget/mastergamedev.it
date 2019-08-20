import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import BlogRoll from '../components/BlogRoll'
import { v4 } from 'uuid'

export const PartnersPageTemplate = ({
  title,
  description,
  partnersTitle,
  image,
  altImage,
  partners,
}) => {

  return(
    <div className="content">
    </div>
  )
}

PartnersPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  partnersTitle: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

const PartnersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PartnersPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        partnersTitle={frontmatter.partnersTitle}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        partners={frontmatter.partners}
      />
    </Layout>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
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
          childImageSharp {
            fluid(maxWidth: 300, quality: 80) {
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
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
