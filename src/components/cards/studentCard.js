import React from 'react'
import MarkdownContent from '../MarkdownContent'

const StudentCard = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      flipCardClass: '',
    }
  }

  toggleClass = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              flipCardClass: 'is-active',
            })
          : this.setState({
              flipCardClass: '',
            })
      }
    )
  }

  render() {
    const student = this.props.student
    let validatedImage
    if(!!student.image) {
      validatedImage = !!student.image.childImageSharp
        ? student.image.childImageSharp.fluid.src
        : student.image
    } else {
      validatedImage = '/img/studente.png'
    }
    return (
      <div className={`studentCard ${this.state.flipCardClass}`} onClick={() => this.toggleClass()}>
        <div className="studentCard--details">
          <img src={validatedImage} alt="" className="studentCard--image"/>
          <div className="studentCard--content">
            <h3 className="title" style={{margin: '0'}}>{student.fullName}</h3>
            <a
              className="studentCard--company"
              href={!!student.compLink ? student.compLink : ""}
              target="_blanck"
            >
              <strong style={{lineHeight: '1'}}>{student.company}</strong>
            </a>
            <p style={{marginBottom: "1rem"}}>Master {student.master}</p>
            <MarkdownContent content={student.games}/>
            <a href={student.linkedin} className="studentCard--icon" target="_blanck">
              <span className="icon has-text-dark">
                <i className="fab fa-3x fa-linkedin"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="studentCard--preview">
          <img src={validatedImage} alt="" className="studentCard--image"/>
          <div className="studentCard--quote">
            <div style={{margin: '0 0 1rem 0'}}>
              <h3 className="title" style={{margin: '0 0 .5rem 0'}}>{student.fullName}</h3>
              <a
                className="studentCard--company"
                href={!!student.compLink ? student.compLink : ""}
                target="_blanck"
              >
                <strong style={{lineHeight: '1'}}>{student.company}</strong>
              </a>
            </div>
            <span className="quote first">“</span>
            <h4>{student.quote}</h4>
            <span className="quote last">”</span>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentCard
