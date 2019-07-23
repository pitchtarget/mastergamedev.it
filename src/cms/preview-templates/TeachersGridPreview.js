import React from 'react'
import PropTypes from 'prop-types'
import { Teachers } from '../../components/Teachers'

const TeachersGridPreview = ({ entry, getAsset }) => {
  const entryTeachers = entry.getIn(['data', 'teachers'])
  const teachers = entryTeachers ? entryTeachers.toJS() : []

  return (
    <Teachers teachers={teachers} />
  )
}

TeachersGridPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeachersGridPreview
