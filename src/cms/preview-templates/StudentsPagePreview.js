import React from 'react'
import PropTypes from 'prop-types'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []
  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  return (
    <StudentsPageTemplate
      image={data.image}
      title={data.title}
      heading={data.heading}
      description={data.description}
      projects={projects}
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
