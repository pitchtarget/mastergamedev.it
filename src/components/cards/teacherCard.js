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
      <figure
        className="teacherCard--image"
        style={{
          backgroundImage: `url(${
            image
          })`
        }}
      />
      <div className="content teacherCard--content">
        <h4 className="title is-size-4-mobile is-size-5-tablet" style={{marginBottom: ".25rem"}}>
          {teacher.fullName}
        </h4>
        <div className="content teacherCard--preview">
          <p className="subtitle is-size-7-mobile is-size-6-tablet" style={{margin: "0"}}>
            {teacher.role}
          </p>
        </div>
        <div className="content teacherCard--details">
          <small className="is-size-7" style={{margin: "0"}}>
            {teacher.bio}
          </small>
          { teacher.link &&
            <p className="has-text-centered">
              <a href={teacher.link} className="">
                <span className="icon is-large has-text-dark">
                  <i className="fab fa-3x fa-linkedin"></i>
                </span>
              </a>
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
