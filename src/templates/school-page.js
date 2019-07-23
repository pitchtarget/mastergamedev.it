import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PartnersGrid from '../components/Partners'
import TeachersGrid from '../components/Teachers'

export const SchoolPageTemplate = ({
  image,
  title,
  heading,
  description,
  partners,
  teachers,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <PartnersGrid partners={partners} />
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <TeachersGrid teachers={teachers} />
        </div>
      </div>
    </section>
  </div>
)

SchoolPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  partners: PropTypes.array,
  teachers: PropTypes.array,

}

const SchoolPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const partnersContent = data.partnersData.frontmatter
  const teachersContent = data.teachersData.frontmatter

  return (
    <Layout>
      <SchoolPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        partners={partnersContent.partners}
        teachers={teachersContent.teachers}
      />
    </Layout>
  )
}

SchoolPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SchoolPage

export const schoolPageQuery = graphql`
  query SchoolPage {
    markdownRemark(frontmatter: { templateKey: { eq: "school-page"}}) {
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
        description
      }
    }
    teachersData: markdownRemark(frontmatter: { templateKey: { eq: "teachers"}}) {
      frontmatter {
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
    partnersData: markdownRemark(frontmatter: { templateKey: { eq: "partners"}}) {
      frontmatter {
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
