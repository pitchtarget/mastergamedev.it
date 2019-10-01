import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Slider from "react-slick";
import PartnerCard from '../components/cards/partnerCard'
import { v4 } from 'uuid'


class PartnersCarousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    };
    const { data } = this.props
    const partners = data.markdownRemark.frontmatter.partners
    const filteredPartners = partners.filter(partner => partner.main)
    return (
      <Slider {...settings}>
          { filteredPartners.length > 0 && filteredPartners.map( partner => (
              <PartnerCard key={v4()} partner={partner} styles="is-carousel" disableModal/>
            ))
          }
      </Slider>
    )
  }
}

PartnersCarousel.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      partners: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PartnersQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "partners-page"}}) {
          frontmatter {
            partners {
              name
              description
              main
              link
              altImage
              image {
                extension
                publicURL
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
    `}
    render={(data, count) => <PartnersCarousel data={data} count={count} />}
  />
)
