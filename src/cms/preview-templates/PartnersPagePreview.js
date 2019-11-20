import React from 'react'
import PropTypes from 'prop-types'
import { PartnersPageTemplate } from '../../templates/partners-page'

const PartnersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryPartners = entry.getIn(['data', 'partners'])
  const partners = entryPartners ? entryPartners.toJS() : []

  return (
    <PartnersPageTemplate
      title={data.title}
      description={data.description}
      partnersTitle={data.partnersTitle}
      altImage={data.altImage}
      image={data.image}
      partners={partners}
      banner={false}
    />
  )
}

PartnersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnersPagePreview
