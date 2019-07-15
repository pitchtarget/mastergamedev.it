import React from 'react'

const PartnerCard = ({ partner }) => {
  let image
  if(partner.image) {
    image = !!partner.image.childImageSharp ? partner.image.childImageSharp.fluid.src : partner.image
  } else {
    image = '/img/partner-img.png'
  }

  return (
    <div className="card">
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
  )
}

export default PartnerCard
