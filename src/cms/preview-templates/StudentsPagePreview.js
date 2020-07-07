import React from 'react'
import PropTypes from 'prop-types'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []

  return (
    <StudentsPageTemplate
      image={data.image}
      altImage={data.altImage}
      title={data.title}
      description={data.description}
      students={students}
      banner={false}
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
