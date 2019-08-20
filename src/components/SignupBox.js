import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import Button from '../components/elements/Button'

class SignupBox extends React.Component {
  render() {
    const { data } = this.props
    const contents = data.markdownRemark.frontmatter.box

    return (
      <div className="signupBox">
        <div className="columns is-desktop is-gapless is-vcentered">
          <div className="column is-3-desktop">
            <div
              className="signupBox--image"
              style={{backgroundImage: `url(${!!contents.image.childImageSharp ? contents.image.childImageSharp.fluid.src : contents.image})`}}
            />
          </div>
          <div className="column">
            <div className="columns is-gapless is-vcentered">
              <div className="column">
                <div className="signupBox--text">
                  <h2 className="title is-4">{contents.title}</h2>
                  <p className="subtitle is-6">{contents.text}</p>
                </div>
              </div>
              <div className="column is-4-desktop">
                <div className="signupBox--cta">
                  <Button
                    text={contents.cta}
                    link={contents.link}
                    local={true}
                    styles="cta cta-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SignupBox.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      topSingin: PropTypes.shape({
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

export default () => (
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
    render={(data) => <SignupBox data={data}/>}
  />
)
