import React from 'react'
import PropTypes from 'prop-types'
import { StudentsPageTemplate } from '../../templates/students-page'

const StudentsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []
  const entryLabProjects = entry.getIn(['data', 'labProjects'])
  const labProjects = entryLabProjects ? entryLabProjects.toJS() : []
  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []
  const entryProjectsMedia = entry.getIn(['data', 'projectsMedia'])
  const projectsMedia = entryProjectsMedia ? entryProjectsMedia.toJS() : []


  return (
    <StudentsPageTemplate
      image={data.image}
      altImage={data.altImage}
      title={data.title}
      description={data.description}
      students={students}
      titleLabProjects={data.titleLabProjects}
      labProjects={labProjects}
      titleProjects={data.titleProjects}
      projects={projects}
      projectMediaTitle={data.projectMediaTitle}
      projectsMedia={projectsMedia}
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
