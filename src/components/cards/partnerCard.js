import React from 'react'

const PartnerCard = ({ partner, styles}) => {
  let validatedImage
  if(!!partner.image) {
    validatedImage = !!partner.image.childImageSharp ? partner.image.childImageSharp.fluid.src : partner.image
  } else {
    validatedImage = '/img/azienda.png'
  }

  return (
    <div className={`partnerCard ${styles ? styles : ''}`}>
      <a href={partner.link}>
        <img
          className="image"
          src={`${validatedImage}`}
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
