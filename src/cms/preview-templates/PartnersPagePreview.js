import React from 'react'
import PropTypes from 'prop-types'
import { PartnersPageTemplate } from '../../templates/partners-page'

const PartnersPagePreview = ({ entry, getAsset }) => {
  const entryTeachers = entry.getIn(['data', 'teachers'])
  const teachers = entryTeachers ? entryTeachers.toJS() : []

  const entryPartners = entry.getIn(['data', 'partners'])
  const partners = entryPartners ? entryPartners.toJS() : []

  return (
    <PartnersPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      partners={partners}
      teachers={teachers}
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
