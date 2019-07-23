import React from 'react'

const TeacherCard = ({ teacher }) => {
  let image
  if(teacher.image) {
    image = !!teacher.image.childImageSharp ? teacher.image.childImageSharp.fluid.src : teacher.image
  } else {
    image = '/img/partner-img.png'
  }

  return (
    <div className="card">
      <a href={teacher.link}>
        <img
          src={`${image}`}
          alt={teacher.altImage}
        />
      </a>
      <p>
        {teacher.fullName}<br/>
        {teacher.role}<br/>
        <a href={teacher.link}>
          social
        </a>
        {teacher.description}<br/>
      </p>
    </div>
  )
}

export default TeacherCard
