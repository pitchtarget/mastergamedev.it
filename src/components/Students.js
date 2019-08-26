import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import StudentCard from './cards/studentCard'

const Students = ({ students }) => {
  return (
    <div className="columns is-multiline">
      {students.length > 0 && students.map(student => (
        <div key={v4()} className="column is-4-tablet is-3-desktop">
          <StudentCard student={student} />
        </div>
      ))}
    </div>
  )
}

Students.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
      fullName: PropTypes.string,
      master: PropTypes.number,
      company: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Students
