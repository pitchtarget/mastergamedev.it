import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import Button from '../components/elements/Button'
import MarkdownContent from '../components/MarkdownContent'

export const ProgramPageTemplate = ({
  title,
  subtitle,
  description,
  titleParagraphs,
  paragraphs,
  bannerStudents,
  bannerMaster,
}) => {
  return (
    <>
      <section className="section has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-widescreen is-offset-1-widescreen">
              <div style={{marginBottom: "3rem"}}>
                <h1 className="title is-1 is-spaced">{title}</h1>
                <h3 className="title is-3">{subtitle}</h3>
                <MarkdownContent content={description}/>
              </div>
              <h2 className="title is-2 is-spaced">{titleParagraphs}</h2>
              <div className="columns is-multiline">
                { paragraphs.length > 0 && paragraphs.map( paragraph =>(
                    <div key={v4()} className="column is-6-tablet">
                      <h3 className="title is-5">{paragraph.title}</h3>
                      <MarkdownContent content={paragraph.description}/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      { !!bannerStudents && !!bannerMaster &&
        <section className="section has-double-background">
          <div className="container is-horizontal-spaced">
            <div className="columns is-tablet is-vcentered">
              <div className="column">
                <div className="has-text-primary-invert" style={{padding: '5%'}}>
                  <h3 className="title is-2 is-spaced is-size-3-mobile is-size-2-tablet">
                      {bannerStudents.title}
                  </h3>
                  <p className="description">
                    {bannerStudents.text}
                  </p>
                  <Button
                    text={bannerStudents.cta} link={bannerStudents.link}
                    styles={`cta cta-large cta__invert`}
                  />
                </div>
              </div>
              <div className="column">
                <div className="has-text-primary" style={{padding: '5%'}}>
                  <h3 className="title is-2 is-spaced has-text-primary is-size-3-mobile is-size-2-tablet">
                      {bannerMaster.title}
                  </h3>
                  <p className="description">
                    {bannerMaster.text}
                  </p>
                  <Button
                    text={bannerMaster.cta} link={bannerMaster.link}
                    styles={`cta cta-large cta__primary`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}

ProgramPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  titleParagraphs: PropTypes.string,
  bannerStudents: PropTypes.object,
  bannerMaster: PropTypes.object,
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  )
}

const ProgramPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const bannerMaster = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'master')
  const bannerStudents = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <ProgramPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
        titleParagraphs={frontmatter.titleParagraphs}
        paragraphs={frontmatter.paragraphs}
        bannerMaster={bannerMaster[0]}
        bannerStudents={bannerStudents[0]}
      />
    </Layout>
  )
}

ProgramPage.propTypes = {
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

export default ProgramPage

export const masterPageQuery = graphql`
  query ProgramPage {
    markdownRemark(frontmatter: { templateKey: { eq: "program-page"}}) {
      frontmatter {
        title
        subtitle
        description
        titleParagraphs
        paragraphs {
          title
          description
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
        }
      }
    }
  }
`
