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
  banner
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
      { !!banner && <Row data={banner} color="primary" reverse/> }
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
  banner: PropTypes.object,
}

const CoffeePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === frontmatter.bannerName)
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
        banner={banner[0]}
      />
    </Layout>
  )
}

CoffeePage.propTypes = {
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

export default CoffeePage

export const coffeePageQuery = graphql`
  query CoffeePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        shortDesc
        description
        bannerName
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
