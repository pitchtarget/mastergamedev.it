import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset, data }) => {
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []

  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  const banners = data.bannersData.frontmatter.banners
  const banner = banners.filter(banner => banner.name === 'partners')

  return (
    <StudentsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      projects={projects}
      students={students}
      banner={banner[0]}
    />
  )
}

StudentsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  data: PropTypes.shape({
    bannersData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        banners: PropTypes.array,
      }),
    }),
  }),
}

export default StudentsPagePreview

export const studentsPagePreviewQuery = graphql`
  query StudentsPagePreview($id: String!) {
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
