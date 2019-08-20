import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import { v4 } from 'uuid'

export const ProgramPageTemplate = ({
  title,
  description,
  titleParagraphs,
  paragraphs,
}) => {
  return(
    <div className="content">
    </div>
  )
}

ProgramPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleParagraphs: PropTypes.string,
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

const ProgramPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProgramPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        titleParagraphs={frontmatter.titleParagraphs}
        paragraphs={frontmatter.paragraphs}
      />
    </Layout>
  )
}

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProgramPage

export const masterPageQuery = graphql`
  query ProgramPage {
    markdownRemark(frontmatter: { templateKey: { eq: "program-page"}}) {
      frontmatter {
        title
        description
        titleParagraphs
        paragraphs {
          title
          description
        }
      }
    }
  }
`
