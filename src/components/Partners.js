import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PartnerCard from '../components/cards/partnerCard'

export const Partners = ({ partners }) => {
  return (
    <div className="columns is-multiline">
      {partners.length > 0 && partners.map(partner => {
        return (
        <div key={v4()} className="column is-4-tablet is-3-desktop">
          <PartnerCard partner={partner} styles="is-grid animate"/>
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

const PartnersGrid = ({ partners }) => (
  <Partners partners={partners}/>
)


export default PartnersGrid
