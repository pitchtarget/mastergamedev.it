import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const CoffeePageTemplate = ({
  cover,
  altCover,
  image,
  altImage,
  title,
  subtitle,
  shortDesc,
  description,
}) => {
  return (
    <>
      <Image src={cover} alt={altCover} styles="cover is-small" children/>
      <div className="container is-horizontal-spaced">
        <div className="section is-medium">
          <h1 className="title is-1 is-spaced">{title}</h1>
          <div className="columns">
            <div className="column">
              <Image src={image} alt={altImage}/>
            </div>
            <div className="column">
              <div className="content">
                <h2 className="title is-spaced is-size-3-mobile is-size-2-tablet">
                  {subtitle}
                </h2>
                <p>{shortDesc}</p>
              </div>
            </div>
          </div>
          <MarkdownContent content={description}/>
        </div>
      </div>
    </>
  )
}

CoffeePageTemplate.propTypes = {
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  altCover: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  altImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shortDesc: PropTypes.string,
  description: PropTypes.string,
}

const CoffeePage = ({ data }) => {
  debugger
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <CoffeePageTemplate
        cover={frontmatter.cover}
        altCover={frontmatter.altCover}
        image={frontmatter.image}
        altImage={frontmatter.altImage}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        shortDesc={frontmatter.shortDesc}
        description={frontmatter.description}
      />
    </Layout>
  )
}

CoffeePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CoffeePage

export const coffeePageQuery = graphql`
  query CoffeePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        shortDesc
        description
        altImage
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altCover
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
