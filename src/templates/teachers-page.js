import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import BlogRoll from '../components/BlogRoll'
import { v4 } from 'uuid'

export const TeachersPageTemplate = ({
  title,
  description,
  teachersTitle,
  image,
  altImage,
  teachers,
}) => {
  return(
    <div className="content">
    </div>
  )
}

TeachersPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  teachersTitle: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  teachers: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      role: PropTypes.string,
      bio: PropTypes.string,
      link: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

const TeachersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeachersPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        teachersTitle={frontmatter.teachersTitle}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        teachers={frontmatter.teachers}
      />
    </Layout>
  )
}

TeachersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeachersPage

export const masterPageQuery = graphql`
  query TeachersPage {
    markdownRemark(frontmatter: { templateKey: { eq: "teachers-page"}}) {
      frontmatter {
        title
        description
        teachersTitle
        altImage
        image {
          childImageSharp {
            fluid(maxWidth: 300, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        teachers {
          fullName
          role
          bio
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
