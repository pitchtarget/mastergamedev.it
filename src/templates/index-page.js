import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { v4 } from 'uuid'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Button from '../components/elements/Button'
import TeachersShortList from '../components/TeachersShortList'
import StudentsSlider from '../components/StudentsSlider'
import PartnersCarousel from '../components/PartnersCarousel'
import SignupBox from '../components/SignupBox'

const validateImages = (image) => {
  let newImage
  if(!!image) {
    newImage = !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  } else {
    newImage = '/img/partner-img.png'
  }
  return newImage
}

export const IndexPageTemplate = ({
  mainCover,
  partnersSection,
  schoolSection,
  studentsSection,
  teachersSection,
  newsSection,
  }) => {
    return (
      <>
        <section id="mainCover" className="cover cover__main">
          <div className="columns is-vcentered">
            <div className="column is-offset-1-desktop is-5-desktop">
              <div className="cover--content">
                <div>
                  <h1 className="title is-spaced is-size-2-mobile is-size-1-tablet">{mainCover.heading}</h1>
                  <p className="subtitle is-size-6-mobile is-size-4-tablet">{mainCover.subheading}</p>
                  <Button
                    text={mainCover.cta}
                    link={mainCover.link}
                    styles="cta cta-large cta__primary"
                  />
                </div>
              </div>
            </div>
            <div
              className="column cover--image"
              style={{
                backgroundImage: `url(${
                  validateImages(mainCover.image)
                })`
              }}
            >
            </div>
          </div>
        </section>

        <section id="topSignUp" className="container signupBox__regular is-moveup">
          <SignupBox />
        </section>

        <section id="partnersSection" className="section">
          <div className="container section is-horizontal-spaced">
            <div className="columns is-gapless is-centered is-mobile">
              <div className="column is-6-desktop">
                <h3 className="content has-text-centered">
                  <p className="title is-size-3-mobile is-size-1-tablet">
                    {partnersSection.heading}
                  </p>
                  <p className="subtitle is-size-6-mobile is-size-4-tablet">
                    {partnersSection.subheading}
                  </p>
                </h3>
              </div>
            </div>
          </div>
          <PartnersCarousel />
          <div className="is-flex" style={{justifyContent: "center"}}>
            <Button
              text={partnersSection.cta}
              link={partnersSection.link}
              styles="cta cta-large cta__invert"
            />
          </div>
        </section>

        <section id="schoolSection" className="section">
          <div className="container">
            <div className="columns section is-horizontal-spaced is-mobile"
            style={{
              minHeight: "32rem",
              backgroundPosition: "70% center",
              backgroundSize: "cover",
              backgroundImage: `url(${
                validateImages(schoolSection.image)
              })`
            }}>
              <div className="column is-6-desktop is-offset-1-desktop">
                <h3 className="content">
                  <p className="title is-size-2-mobile is-size-1-tablet has-text-white">
                    {schoolSection.heading}
                  </p>
                  <p className="subtitle is-size-6-mobile is-size-4-tablet has-text-white">
                    {schoolSection.subheading}
                  </p>
                </h3>
                <Button
                  text={schoolSection.cta}
                  link={schoolSection.link}
                  local={true}
                  styles="cta cta-large cta__light"
                />
              </div>
            </div>

            <div className="columns is-centered" style={{marginTop: "-4rem"}}>
              { schoolSection.bullet.length > 0 && schoolSection.bullet.map( bullet =>(
                  <div key={v4()} className="column is-3-desktop ">
                    <div className="card" style={{paffing: "2rem"}}>
                      <div className="card-content" style={{minHeight: "16rem"}}>
                        <h4 className="title is-4 has-text-weight-medium">{bullet.heading}</h4>
                        <p className="subtitle is-6 has-text-weight-normal">{bullet.subheading}</p>
                        <Link to={bullet.link} className="">{bullet.cta}</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section id="studentsSection" className="section is-medium has-background-primary">
          <div className="container is-horizontal-spaced">
            <div className="columns">
              <div className="column is-6-desktop is-offset-1-desktop">
                <h3 className="content">
                  <p className="title is-2">{studentsSection.heading}</p>
                  <p className="subtitle is-5">{studentsSection.subheading}</p>
                </h3>
                <Button
                  text={studentsSection.cta}
                  link={studentsSection.link}
                  styles="cta cta-large cta__invert"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <StudentsSlider />
          </div>
        </section>
        <section id="bottomSignUp" className="container signupBox__invert is-moveup">
          <SignupBox/>
        </section>

        <section id="teachersSection" className="section is-medium">
          <div className="container section is-horizontal-spaced">
            <div className="columns">
              <div className="column is-6-desktop is-offset-1-desktop">
                <h3 className="content">
                  <p className="title is-2">{teachersSection.heading}</p>
                  <p className="subtitle is-5">{teachersSection.subheading}</p>
                </h3>
                <Button
                  text={teachersSection.cta}
                  link={teachersSection.link}
                  styles="cta cta-large cta__invert"
                />
              </div>
            </div>
          </div>
          <div className="container is-horizontal-spaced">
            <div className="columns">
              <div className="column is-offset-1-widescreen is-10-widescreen">
                <TeachersShortList />
              </div>
            </div>
          </div>
        </section>
        <section id="postsSection" className="section is-horizontal-spaced" style={{backgroundColor: "#CBC9D1"}}>
          <div className="container">
            <div className="columns is-gapless is-vcentered">
              <div className="column is-10 is-offset-1">
                <h3 className="title is-2">{newsSection.heading}</h3>
              </div>
              <div className="column">
                <Button
                  text={newsSection.cta}
                  link={newsSection.link}
                  local={true}
                  styles="cta cta__invert cta__align_right"
                />
              </div>
            </div>
            <BlogRoll/>
          </div>
        </section>
      </>
    )
}
IndexPageTemplate.propTypes = {
  mainCover: PropTypes.object,
  topSignIn: PropTypes.object,
  partnersSection: PropTypes.object,
  schoolSection: PropTypes.object,
  studentsSection: PropTypes.object,
  bottomSignIn: PropTypes.object,
  teachersSection: PropTypes.object,
  newsSection: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainCover={frontmatter.mainCover}
        topSignIn={frontmatter.topSignIn}
        partnersSection={frontmatter.partnersSection}
        schoolSection={frontmatter.schoolSection}
        studentsSection={frontmatter.studentsSection}
        bottomSignIn={frontmatter.bottomSignIn}
        teachersSection={frontmatter.teachersSection}
        newsSection={frontmatter.newsSection}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    partnersData: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainCover {
          image {
            childImageSharp {
              fluid(maxWidth: 1980, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altImage
          heading
          subheading
          cta
          link
        }
        partnersSection {
          heading
          subheading
          cta
          link
        }
        schoolSection {
          image {
            childImageSharp {
              fluid(maxWidth: 1980, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altImage
          heading
          subheading
          cta
          link
          bullet {
            heading
            subheading
            cta
            link
          }
        }
        studentsSection {
          heading
          subheading
          cta
          link
        }
        teachersSection {
          heading
          subheading
          cta
          link
        }
        newsSection {
          heading
          cta
          link
        }
      }
    }
  }
`
