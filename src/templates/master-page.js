import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const MasterPageTemplate = ({
  title,
  image,
  altImage,
  serviceTitle,
  paragraphs,
  services,
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
                    <div key={v4()} className="column is-12" >
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
      <section className="section is-medium has-background-primary">
        <div className="container is-horizontal-spaced">
          <h2 className="title is-2">{serviceTitle}</h2>
          <div className="columns is-multiline is-centered">
            { services.length > 0 && services.map( service => (
                <div key={v4()} className="column is-4-tablet is-2-desktop is-1-fullhd has-text-centered">
                  <Image src={service.image} alt={service.alt} styles="is-96x96 image--tag" rounded/>
                  <h4 className="title is-5" style={{marginTop: '1rem'}}>{service.heading}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section id="iscrizioni" className="section has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div className="columns is-multiline is-tablet">
                { bottomParagraphs.length > 0 && bottomParagraphs.map((paragraph, id) => (
                    <div key={v4()} className="column is-12">
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
      { !!banner && <Row data={banner} color="light"/> }
      {/*
      <section id="postsSection" className="section is-horizontal-spaced" style={{backgroundColor: "#CBC9D1"}}>
        <div className="container">
          <div className="columns is-gapless is-vcentered">
            <div className="column is-6 is-offset-1">
              <h3 className="title is-2">Blog</h3>
            </div>
            <div className="column">
              <Button
                text={"leggi le notizie"}
                link={"/blog"}
                local={true}
                styles="cta cta__invert cta__align_right"
              />
            </div>
          </div>
          <BlogRoll/>
        </div>
      </section>
      */}
    </>
  )
}

MasterPageTemplate.propTypes = {
  title: PropTypes.string,
  altImage: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  serviceTitle: PropTypes.string,
  paragraphs: PropTypes.array,
  services: PropTypes.array,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

const MasterPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'program')

  return (
    <Layout>
      <MasterPageTemplate
        title={frontmatter.title}
        altImage={frontmatter.altImage}
        image={frontmatter.image}
        serviceTitle={frontmatter.serviceTitle}
        paragraphs={frontmatter.paragraphs}
        services={frontmatter.services}
        banner={banner[0]}
      />
    </Layout>
  )
}

MasterPage.propTypes = {
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

export default MasterPage

export const masterPageQuery = graphql`
  query MasterPage {
    markdownRemark(frontmatter: { templateKey: { eq: "master-page"}}) {
      frontmatter {
        title
        image {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altImage
        serviceTitle
        paragraphs {
          title
          description
        }
        services {
          heading
          alt
          image {
            extension
            publicURL
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
