import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const BlendPageTemplate = ({
  image,
  altImage,
  title,
  description,
  blendSelection,
  blendTitle,
  blends,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover align-top is-small" children/>
      <section className="section is-medium has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-8-desktop is-offset-1-desktop">
              <h1 className="title is-1">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          { blendSelection.length > 0 &&
            <div className="columns is-tablet">
              <div className="column is-10-desktop is-offset-1-desktop">
                { blendSelection.length > 0 && blendSelection.map( (selected, id) => {
                  const reverse = id % 2
                  return (
                    <div key={v4()} className="section">
                      <div
                        className="columns is-vcentered"
                        style={{flexDirection: reverse ? 'row-reverse' : 'row'}}
                      >
                        <div className="column">
                          <Image src={selected.image} alt={selected.alt}/>
                        </div>
                        <div className="column">
                          <div className="content">
                            <h3 className="title is-spaced is-size-3-mobile is-size-2-tablet">
                                {selected.title}
                            </h3>
                            <MarkdownContent content={selected.description}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  )})
                }
              </div>
            </div>
          }
        </div>
      </section>
      <div className="container is-horizontal-spaced">
        <div className="columns is-tablet">
          <div className="column is-10-desktop is-offset-1-desktop">
            <div className="section is-medium">
              <h2 className="title is-2 is-spaced">{blendTitle}</h2>
              {/* Inserire le origini */}
            </div>
          </div>
        </div>
      </div>
      { !!banner && <Row data={banner} color="primary" reverse/> }
    </>
  )
}

BlendPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.object,
  blendTitle: PropTypes.string,
  blendSelection: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  blends: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
}

const BlendPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <BlendPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        blendSelection={frontmatter.blendSelection}
        blendTitle={frontmatter.blendTitle}
        blends={frontmatter.blends}
        banner={banner[0]}
      />
    </Layout>
  )
}

BlendPage.propTypes = {
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

export default BlendPage

export const blendPageQuery = graphql`
  query BlendPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blendSelection {
          title
          description
          altImage
          image {
            childImageSharp {
              fluid(maxWidth: 1240, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        blendTitle
        blends {
          name
          origin
          description
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
