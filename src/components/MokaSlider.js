import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import { graphql, StaticQuery } from 'gatsby'
import { v4 } from 'uuid'

class MokaSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      centerPadding: "0px 0px",
    };
    const { data } = this.props
    const secrets = data.markdownRemark.frontmatter.mokaSecrets.secrets
    return (
      <Slider {...settings}>
        { secrets.length > 0 && secrets.map( secret =>(
            <div key={v4()} className="studentSlide">
              <div className="columns is-tablet is-gapless">
                <div
                  className="studentSlide--image column"
                  style={{ backgroundImage:
                  `url(${!!secret.image.childImageSharp ? secret.image.childImageSharp.fluid.src : secret.image})`
                  }}
                />
                <div className="column">
                  <h4 className="studentSlide--content content">
                    <p className="title is-5">{secret.title}</p>
                    <p className="">{secret.description}</p>
                  </h4>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    )
  }
}

MokaSlider.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      students: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlendQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page"}}) {
          frontmatter {
            mokaSecrets {
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
    `}
    render={(data, count) => <MokaSlider data={data} count={count} />}
  />
)
