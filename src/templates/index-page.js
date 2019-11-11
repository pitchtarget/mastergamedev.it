import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { v4 } from 'uuid'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Button from '../components/elements/Button'
import MokaSlider from '../components/MokaSlider'
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
  coffeeType,
  mokaSecrets,
  }) => {
    return (
      <>
        <section id="mainCover" className="cover cover__main">
          <div className="columns is-vcentered">
            <div className="column is-offset-1-desktop is-5-desktop">
              <div className="cover--content">
                <div>
                  <h1 className="title is-spaced is-size-2-mobile is-size-1-tablet">{mainCover.heading}</h1>
                  <p className="subtitle is-size-5">{mainCover.subheading}</p>
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

        <section className="container">
          <SignupBox id="topSignUp" styles="is-moveup"/>
        </section>

        <section id="schoolSection" className="section">
          <div className="container">
            <div className="columns section is-horizontal-spaced"
            style={{
              minHeight: "32rem",
              backgroundPosition: "70% center",
              backgroundSize: "cover",
              backgroundImage: `url(${
                validateImages(coffeeType.image)
              })`
            }}>
              <div className="column is-5-desktop is-offset-1-desktop">
                <h3 className="content">
                  <p className="title is-size-2-mobile is-size-1-tablet has-text-white">
                    {coffeeType.heading}
                  </p>
                  <p className="subtitle is-size-5 has-text-white">
                    {coffeeType.subheading}
                  </p>
                </h3>
                <Button
                  text={coffeeType.cta}
                  link={coffeeType.link}
                  local={true}
                  styles="cta cta-large cta__light"
                />
              </div>
              { coffeeType.coffees.length > 0 && coffeeType.coffees.map( coffee =>(
                  <div key={v4()} className="coffee-card column is-4-desktop is-offset-1-desktop">
                    <div className="card" style={{paffing: "2rem"}}>
                      <div className="card-image">
                        <figure className="image">
                          <img src={validateImages(coffee.image)} alt={coffee.altImage}/>
                        </figure>
                      </div>
                      <div className="card-content" style={{minHeight: "13rem"}}>
                        <h4 className="title is-4 has-text-weight-medium">{coffee.heading}</h4>
                        <p className="subtitle is-6 has-text-weight-normal">{coffee.subheading}</p>
                        <Link to={coffee.link} className="">{coffee.cta}</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          {/*
            <div className="columns is-centered" style={{marginTop: "-4rem"}}>
              { coffeeType.coffees.length > 0 && coffeeType.coffees.map( coffee =>(
                  <div key={v4()} className="column is-4-desktop ">
                    <div className="card" style={{paffing: "2rem"}}>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={validateImages(coffee.image)} alt={coffee.altImage}/>
                        </figure>
                      </div>
                      <div className="card-content" style={{minHeight: "13rem"}}>
                        <h4 className="title is-4 has-text-weight-medium">{coffee.heading}</h4>
                        <p className="subtitle is-6 has-text-weight-normal">{coffee.subheading}</p>
                        <Link to={coffee.link} className="">{coffee.cta}</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          */}
          </div>
        </section>

        <section style={{backgroundColor: "#795336"}}>
          <div className="section is-medium">
            <div className="container is-horizontal-spaced">
              <h3 className="content">
                <p className="title has-text-white is-2 is-spaced">{mokaSecrets.heading}</p>
                <p className="subtitle has-text-white is-5">{mokaSecrets.subheading}</p>
              </h3>
            </div>
            <div className="container is-horizontal-spaced">
              <div className="columns is-vcentered">
                <div className="column is-10-tablet is-offset-1-tablet">
                  { mokaSecrets.secrets.length > 0 && mokaSecrets.secrets.map( secret => (
                      <div key={v4()} className="mokaSecret columns is-tablet is-gapless" style={{margin: '2rem 0'}}>
                        <div className="column is-2-tablet">
                          <figure className="image">
                            <img
                              src={!!secret.image.childImageSharp ? secret.image.childImageSharp.fluid.src : secret.image}
                              alt={secret.altImage}
                            />
                          </figure>
                        </div>
                        <div className="column">
                          <div className="content secret">
                            <h4 className="title is-5 is-spaced">{secret.title}</h4>
                            <p className="subtitle is-size-6">{secret.description}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
IndexPageTemplate.propTypes = {
  mainCover: PropTypes.object,
  coffeeType: PropTypes.object,
  mokaSecrets: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainCover={frontmatter.mainCover}
        coffeeType={frontmatter.coffeeType}
        mokaSecrets={frontmatter.mokaSecrets}
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
        }
        coffeeType {
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
          coffees {
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
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
        }
        mokaSecrets {
          heading
          subheading
          cta
          link
          secrets {
            title
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
    }
  }
`
