import React from 'react'
import PropTypes from 'prop-types'
import { TeachersPageTemplate } from '../../templates/teachers-page'

const TeachersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryTeachers = entry.getIn(['data', 'teachers'])
  const teachers = entryTeachers ? entryTeachers.toJS() : []

  return (
    <TeachersPageTemplate
      title={data.title}
      description={data.description}
      teachersTitle={data.teachersTitle}
      altImage={data.altImage}
      image={data.image}
      teachers={teachers}
      banner={false}
    />
  )
}

TeachersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeachersPagePreview
