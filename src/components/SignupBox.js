import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import Button from '../components/elements/Button'

export const SignupBoxComponent = ({ data, color, id, styles }) => {
  const style = color === "invert"
  const content = data.markdownRemark.frontmatter.box
  return (
    <div id={id} className={`signupBox signupBox${style ? "__invert" : "__regular"} ${styles}`}>
      <div className="columns is-desktop is-gapless is-vcentered">
        <div className="column is-3-desktop">
          <div
            className="signupBox--image"
            style={{backgroundImage: `url(${!!content.image.childImageSharp ? content.image.childImageSharp.fluid.src : content.image})`}}
          />
        </div>
        <div className="column">
          <div className="columns is-gapless is-vcentered">
            <div className="column">
              <div className={`signupBox--text signupBox--text${style ? "__invert" : "__regular"}`}>
                <h2 className="title is-4">{content.title}</h2>
                <p className="subtitle is-6">{content.text}</p>
              </div>
            </div>
            <div className="column is-4-desktop">
              <div className="signupBox--cta">
                <Button
                  text={content.cta}
                  link={content.link}
                  styles={`cta cta-large cta${!style ? "__invert" : "__primary"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SignupBox = ({color, id, styles}) => (
  <StaticQuery
    query={graphql`
      query SignupBoxQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "banners"}}) {
          frontmatter {
            box {
              image {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
              title
              text
              cta
              link
            }
          }
        }
      }
    `}
    render={data => <SignupBoxComponent data={data} color={color} id={id} styles={styles}/>}
  />
)

SignupBoxComponent.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      box: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        altImage: PropTypes.string,
        heading: PropTypes.string,
        subheading: PropTypes.string,
        cta: PropTypes.string,
        link: PropTypes.string,
      }),
    }),
  }),
}

export default SignupBox
