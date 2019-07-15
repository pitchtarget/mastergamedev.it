import React from 'react'
import PropTypes from 'prop-types'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset }) => {
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []

  return (
    <StudentsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      students={students}
    />
  )
}

StudentsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StudentsPagePreview
