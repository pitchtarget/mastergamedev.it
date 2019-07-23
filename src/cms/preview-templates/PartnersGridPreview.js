import React from 'react'
import PropTypes from 'prop-types'
import { Partners } from '../../components/Partners'

const PartnersGridPreview = ({ entry, getAsset }) => {
  const entryPartners = entry.getIn(['data', 'partners'])
  const partners = entryPartners ? entryPartners.toJS() : []

  return (
    <Partners partners={partners} />
  )
}

PartnersGridPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnersGridPreview
