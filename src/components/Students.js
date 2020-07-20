import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import StudentCard from './cards/studentCard'

const Students = ({ students }) => {
  return (
    <>
      {students.length > 0 && students.map(student => (
        <StudentCard key={v4()} student={student} />
      ))}
    </>
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
