import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import StudentCard from './cards/studentCard'

const Students = ({ students }) => {
  return (
    <div className="columns is-multiline is-desktop">
      {students.length > 0 && students.map(student => (
        <div key={v4()} className="column is-12-desktop is-10-widescreen is-offset-1-widescreen">
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
      linkedin: PropTypes.string,
      master: PropTypes.number,
      company: PropTypes.string,
      compLink: PropTypes.string,
      quote: PropTypes.string,
      titles: PropTypes.string,
    })
  ),
}

export default Students
