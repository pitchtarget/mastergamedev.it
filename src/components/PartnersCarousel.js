import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PartnerCard from '../components/cards/partnerCard'
import { v4 } from 'uuid'


class PartnersCarousel extends React.Component {
  render() {
    const { data } = this.props
    const partners = data.markdownRemark.frontmatter.partners
    const filteredPartners = partners.filter(partner => partner.main)
    return (
      <div className="partnersCarousel">
        <div className="wrapper">
          { filteredPartners.length > 0 && filteredPartners.map( partner => (
              <PartnerCard key={v4()} partner={partner} styles="is-carousel"/>
            ))
          }
        </div>
      </div>
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
              main
              link
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
    `}
    render={(data, count) => <PartnersCarousel data={data} count={count} />}
  />
)
