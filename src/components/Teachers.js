import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import TeacherCard from '../components/cards/teacherCard'

const Teachers = ({ teachers }) => {
  return (
    <div className="columns is-multiline">
      {teachers.length > 0 && teachers.map(teacher => {
        return (
        <div key={v4()} className="column is-4">
          <TeacherCard teacher={teacher}/>
        </div>
      )})}
    </div>
  )
}

Teachers.propTypes = {
  teachers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
      fullName: PropTypes.string,
      role: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Teachers
