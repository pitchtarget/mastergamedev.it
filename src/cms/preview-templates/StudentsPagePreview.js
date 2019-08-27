import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset }) => {
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []

  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  return (
    <StudentsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      projects={projects}
      students={students}
      banner={[]}
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
