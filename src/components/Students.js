import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Students = ({ students }) => (
  <div className="columns is-multiline">
    {students.length > 0 && students.map(student => (
      <div key={v4()} className="column is-4">
        <img
          src={`${!!student.image.childImageSharp ? student.image.childImageSharp.fluid.src : student.image}`}
          alt={student.altImage}
        />
        <p>
          {student.fullName}<br/>
          {student.master}<br/>
          {student.company}<br/>
          {student.role}<br/>
          {student.description}<br/>
        </p>
      </div>
    ))}
  </div>
)

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
