import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import Students from '../components/Students'

export const StudentsPageTemplate = ({
  image,
  altImage,
  title,
  description,
  students,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover align-top is-small" children/>
      <section className="section has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-widescreen is-offset-1-widescreen">
              <h1 className="title is-1">{title}</h1>
              <p>{description}</p>
              <Students students={students} />
            </div>
          </div>
        </div>
      </section>
      { !!banner && <Row data={banner} color="primary" reverse/> }
    </>
  )
}

StudentsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

const StudentsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <StudentsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        students={frontmatter.students}
        banner={banner[0]}
      />
    </Layout>
  )
}

StudentsPage.propTypes = {
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

export default StudentsPage

export const studentsPageQuery = graphql`
  query StudentsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        students {
          fullName
          linkedin
          master
          company
          compLink
          quote
          games
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
