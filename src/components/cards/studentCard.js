import React from 'react'
import MarkdownContent from '../MarkdownContent'

const StudentCard = ({student}) => {
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
  <div className={`studentCard-info ${styles}`}>
    <div className="studentCard-field">
      <h5 className="studentCard-label">Lavora presso:</h5>
      <p>{info.company}</p>
    </div>
    <div className="studentCard-field">
      <h5 className="studentCard-label">Partecipazione ai progetti</h5>
      <MarkdownContent content={info.games}/>
    </div>
    <div className="studentCard-field">
      <a href={info.linkedin} className="studentCard-link studentCard-icon" target="_blanck">
        <h5 className="studentCard-label">Linkedin</h5>
        <span className="icon has-text-dark">
          <i className="fab fa-3x fa-linkedin"></i>
        </span>
      </a>
    </div>
  </div>

  );
  return (
    <div className="studentCard">
      <div className="studentCard-details">
        <div className="studentCard-profile">
          <img src={validatedImage} alt={student.altImage} className="studentCard-image"/>
          <div>
            <h3 className="studentCard-name">{student.fullName}</h3>
            <small className="studentCard-master">Studente Master {student.master}</small>
          </div>
        </div>
        {cardInfo(studentInfo,"is-hidden-mobile")}
      </div>
      <hr className="studentCard-division d-vertical is-hidden-mobile"/>
      <div className="studentCard-quote">
        <span className="quote first">“</span>
          <h4 className="studentCard-quote-content">{student.quote}</h4>
        <span className="quote last">”</span>
      </div>
      {cardInfo(studentInfo,"is-hidden-tablet")}
      <hr className="studentCard-division d-horizontal is-hidden-tablet "/>
    </div>
  )
}

export default StudentCard
