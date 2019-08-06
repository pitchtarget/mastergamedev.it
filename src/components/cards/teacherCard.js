import React from 'react'

const TeacherCard = ({ teacher }) => {
  let image
  if(teacher.image) {
    image = !!teacher.image.childImageSharp ? teacher.image.childImageSharp.fluid.src : teacher.image
  } else {
    image = '/img/partner-img.png'
  }

  return (
    <div className="teacherCard card">
      <a href={teacher.link}>
        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={`${image}`}
              alt={teacher.altImage}
            />
          </figure>
        </div>
      </a>
      <div className="content teacherCard--content">
        <h4 className="title is-size-4-mobile is-size-5-tablet" style={{marginBottom: ".25rem"}}>
          {teacher.fullName}
        </h4>
        <p className="subtitle is-size-7-mobile is-size-6-tablet" style={{margin: "0"}}>
          {teacher.role}
        </p>
        <a href={teacher.link} className="" style={{display: "none"}}>
          <span className="icon is-large has-text-dark">
            <i className="fab fa-linkedin"></i>
          </span>
        </a>
      </div>
    </div>
  )
}

export default TeacherCard
