import React from 'react'
import MarkdownContent from '../MarkdownContent'

const NewStudentCard = ({student}) => {
  let validatedImage
  if(!!student.image) {
    validatedImage = !!student.image.childImageSharp
      ? student.image.childImageSharp.fluid.src
      : student.image
  } else {
    validatedImage = '/img/studente.png'
  }
  const studentInfo = {
    link: student.compLink,
    company: student.company,
    games: student.games,
    lnkedin: student.linkedin,
  }
  const cardInfo = (info,styles) => (
  <div className={`new_card-info ${styles}`}>
    <div className="new_card-field">
      <h5 className="new_card-label">Lavora presso:</h5>
      <p>{info.company}</p>
    </div>
    <div className="new_card-field">
      <h5 className="new_card-label">Partecipazione ai progetti</h5>
      <MarkdownContent content={info.games}/>
    </div>
    <div className="new_card-field">
      <a href={info.linkedin} className="new_card-link new_card-icon" target="_blanck">
        <h5 className="new_card-label">Linkedin</h5>
        <span className="icon has-text-dark">
          <i className="fab fa-3x fa-linkedin"></i>
        </span>
      </a>
    </div>
  </div>

  );
  return (
    <div className="new_card">
      <div className="new_card-details">
        <div className="new_card-profile">
          <img src={validatedImage} alt={student.altImage} className="new_card-image"/>
          <div>
            <h3 className="new_card-name">{student.fullName}</h3>
            <small className="new_card-master">Studente Master {student.master}</small>
          </div>
        </div>
        {cardInfo(studentInfo,"is-hidden-mobile")}
      </div>
      <hr className="new_card-division d-vertical is-hidden-mobile"/>
      <div className="new_card-quote">
        <span className="quote first">“</span>
          <h4 className="new_card-quote-content">{student.quote}</h4>
        <span className="quote last">”</span>
      </div>
      {cardInfo(studentInfo,"is-hidden-tablet")}
      <hr className="new_card-division d-horizontal is-hidden-tablet "/>
    </div>
  )
}

export default NewStudentCard
