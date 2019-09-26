import React from 'react'

class TeacherCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teacher: this.props.teacher,
      image: null
    }
  }

  componentDidMount() {
    const image = this.props.teacher.image
    let teacherImage
    if(!!image && !!image.childImageSharp) {
      teacherImage = image.childImageSharp.fluid.src
    } else if (!!image) {
      teacherImage =  image
    } else {
      teacherImage =  '/img/docente.png'
    }
    this.setState({
      image: teacherImage
    })
  }

  componentWillUnmount() {
    this.setState({
      image: null
    })
  }

  render() {
    const { teacher, image } = this.state
    console.log(image)

    return (
      <div className="teacherCard card">
        <figure
          className="teacherCard--image"
          style={{backgroundImage: `url(${image})`}}
        />
        <div className="content teacherCard--content">
          <h4 className="title is-size-4-mobile is-size-5-tablet" style={{marginBottom: ".25rem"}}>
            {teacher.fullName}
          </h4>
          <div className="content teacherCard--preview">
            <p className="is-size-7" style={{margin: "0"}}>
              {teacher.role}
            </p>
          </div>
          <div className="content teacherCard--details">
            <p className="is-size-7" style={{margin: "0"}}>
              {teacher.bio}
            </p>
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
}

export default TeacherCard
