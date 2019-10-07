import React from 'react'
import MarkdownContent from '../MarkdownContent'

const StudentCard = ({ student }) => {
  let validatedImage
  if(!!student.image) {
    validatedImage = !!student.image.childImageSharp
      ? student.image.childImageSharp.fluid.src
      : student.image
  } else {
    validatedImage = '/img/studente.png'
  }

  return (
    <div className="studentCard">
      <div className="studentCard--details">
        <img src={validatedImage} alt="" className="studentCard--image"/>
        <div className="studentCard--content">
          <h4 className="title" style={{margin: '0'}}>{student.fullName}</h4>
          <a
            className="studentCard--company"
            href={!!student.compLink ? student.compLink : ""}
            target="_blanck"
          >
            <strong style={{lineHeight: '1'}}>{student.company}</strong>
          </a>
          <p style={{marginBottom: "1rem"}}>Master {student.master}</p>
          <MarkdownContent content={student.games}/>
          <a href={student.linkedin} className="studentCard--icon">
            <span className="icon has-text-dark">
              <i className="fab fa-3x fa-linkedin"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="studentCard--preview">
        <img src={validatedImage} alt="" className="studentCard--image"/>
        <div className="studentCard--quote">
          <span>“</span>
          <h4>{student.quote}</h4>
          <span>”</span>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
