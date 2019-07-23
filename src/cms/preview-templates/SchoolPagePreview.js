import React from 'react'
import PropTypes from 'prop-types'
import { SchoolPageTemplate } from '../../templates/school-page'

const SchoolPagePreview = ({ entry, getAsset }) => {
  const entryPartners = entry.getIn(['data', 'partners'])
  const partners = entryPartners ? entryPartners.toJS() : []

  const entryteachers = entry.getIn(['data', 'teachers'])
  const teachers = entryteachers ? entryteachers.toJS() : []

  return (
    <SchoolPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      partners={partners}
      teachers={teachers}
    />
  )
}

SchoolPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SchoolPagePreview
