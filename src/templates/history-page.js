import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Button from '../components/elements/Button'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const HistoryPageTemplate = ({
  title,
  image,
  altImage,
  historyTitle,
  paragraphs,
  historySteps,
  banner,
}) => {
  const topParagraphs = paragraphs.length > 0 && paragraphs.slice(1,4)
  const bottomParagraphs = paragraphs.length > 0 && paragraphs.slice(4)

  return (
    <>
      <Image src={image} alt={altImage} styles="cover is-small" children/>
      <section className="section has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div className="section">
                <h1 className="title is-1">{title}</h1>
              </div>
              <div className="section">
                <h3 className="title is-3 is-spaced">{paragraphs[0].title}</h3>
                <MarkdownContent content={paragraphs[0].description}/>
              </div>
              <div className="columns is-multiline is-tablet">
                { topParagraphs.length > 0 && topParagraphs.map((paragraph, id) => (
                    <div key={v4()} className={`column is-10 ${id % 2 ? 'is-offset-2' : ''}`} >
                      <div className="section is-small">
                        <h3 className="title is-3 is-spaced">{paragraph.title}</h3>
                        <MarkdownContent content={paragraph.description}/>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    {/*
      TIMELINE
      <section className="section is-medium has-background-primary">
        <div className="container is-horizontal-spaced">
          <h2 className="title is-2">{historyTitle}</h2>
          <div className="columns is-multiline is-centered">
            { historySteps.length > 0 && historySteps.map( step => (
                <div key={v4()} className="column is-4-tablet is-2-desktop is-1-fullhd has-text-centered">
                  <Image src={step.image} alt={step.alt} styles="is-96x96 image--tag" rounded/>
                  <h4 className="title is-5" style={{marginTop: '1rem'}}>{step.heading}</h4>
                  <p className="has-text-primary-invert">{step.subheading}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    */}

    {/*
      PARAGRAPHS
      <section className="section has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div className="columns is-multiline is-tablet">
                { bottomParagraphs.length > 0 && bottomParagraphs.map((paragraph, id) => (
                    <div key={v4()} className={`column is-10 ${id % 2 ? 'is-offset-2' : ''}`} >
                      <div className="section is-small">
                        <h3 className="title is-3 is-spaced">{paragraph.title}</h3>
                        <p>{paragraph.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    */}
      { !!banner && <Row data={banner} color="dark"/> }
    </>
  )
}

HistoryPageTemplate.propTypes = {
  title: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  serviceTitle: PropTypes.string,
  paragraphs: PropTypes.array,
  services: PropTypes.array,
}

const HistoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === frontmatter.bannerName)

  return (
    <Layout>
      <HistoryPageTemplate
        title={frontmatter.title}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        historyTitle={frontmatter.historyTitle}
        paragraphs={frontmatter.paragraphs}
        historySteps={frontmatter.historySteps}
        banner={banner[0]}
      />
    </Layout>
  )
}

HistoryPage.propTypes = {
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

export default HistoryPage

export const historyPageQuery = graphql`
  query HistoryPage {
    markdownRemark(frontmatter: { templateKey: { eq: "history-page"}}) {
      frontmatter {
        title
        bannerName
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altImage
        historyTitle
        paragraphs {
          title
          description
        }
        historySteps {
          heading
          subheading
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 100, quality: 80) {
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
