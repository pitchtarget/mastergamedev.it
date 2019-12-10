import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Teachers from '../components/Teachers'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const TeachersPageTemplate = ({
  title,
  description,
  teachersTitle,
  image,
  altImage,
  teachers,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover is-small align-top" children/>
      <section className="has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-8-desktop is-offset-1-desktop">
              <div className="section">
                <h1 className="title is-1">{title}</h1>
                <MarkdownContent content={description}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container is-horizontal-spaced">
        <div className="columns is-tablet">
          <div className="column is-10-desktop is-offset-1-desktop">
            <div className="section is-medium">
              {!!teachersTitle &&
                <h2 className="title is-2 is-spaced">{teachersTitle}</h2>
              }
              <Teachers teachers={teachers} />
            </div>
          </div>
        </div>
      </div>
      { !!banner && <Row data={banner} color="primary"/> }
    </>
  )
}

TeachersPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  teachersTitle: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  banner: PropTypes.object,
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
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <TeachersPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        teachersTitle={frontmatter.teachersTitle}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        teachers={frontmatter.teachers}
        banner={banner[0]}
      />
    </Layout>
  )
}

TeachersPage.propTypes = {
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
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240, quality: 80) {
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
