import React from 'react'

const StudentCard = ({ student }) => {
  let validatedImage
  if(!!student.image) {
    validatedImage = !!student.image.childImageSharp ? student.image.childImageSharp.fluid.src : student.image
  } else {
    validatedImage = '/img/studente.png'
  }

  return (
    <div className="studentCard card">
      <figure
        className="studentCard--image"
        style={{
          backgroundImage: `url(${
            validatedImage
          })`
        }}
      />
      <div className="content studentCard--content">
        <h4 className="title is-size-4-mobile is-size-5-tablet" style={{marginBottom: ".25rem"}}>
          {student.fullName}
        </h4>
        <div className="studentCard--preview">
          <h5 className="subtitle is-7" style={{marginBottom: ".25rem"}}>
            {student.company}
          </h5>
          <p className="subtitle is-7" style={{margin: "0"}}>
            {student.role}
          </p>
        </div>
        <div className="content studentCard--details">
          <h5 className="subtitle is-7" style={{marginBottom: ".25rem"}}>
            Master: {student.master}
          </h5>
          <p className="is-size-7" style={{margin: "0"}}>
            {student.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
