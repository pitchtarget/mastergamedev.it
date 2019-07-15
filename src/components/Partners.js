import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Partners = ({ partners }) => {
  return (
    <div className="columns is-multiline">
      {partners.length > 0 && partners.map(partner => {
        let image
        if(partner.image) {
          image = !!partner.image.childImageSharp ? partner.image.childImageSharp.fluid.src : partner.image
        } else {
          image = '/img/partner-img.png'
        }

        return (
        <div key={v4()} className="column is-4">
          <a href={partner.link}>
            <img
              src={`${image}`}
              alt={partner.altImage}
            />
          </a>
          <p>
            <a href={partner.link}>
              {partner.name}<br/>
            </a>
            {partner.description}<br/>
          </p>
        </div>
      )})}
    </div>
  )
}

Partners.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
      name: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Partners
