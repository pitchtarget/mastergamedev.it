import React from 'react'

const PartnerCard = ({ partner }) => {
  let image
  if(partner.image) {
    image = !!partner.image.childImageSharp ? partner.image.childImageSharp.fluid.src : partner.image
  } else {
    image = '/img/partner-img.png'
  }

  return (
    <div className="partnerCard">
      <a href={partner.link}>
        <img
          className="image"
          src={`${image}`}
          alt={partner.altImage}
        />
        <h4 className="text">
          {partner.name}
        </h4>
      </a>
    </div>
  )
}

export default PartnerCard
