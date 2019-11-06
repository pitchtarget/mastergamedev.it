import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import { graphql, StaticQuery } from 'gatsby'
import { v4 } from 'uuid'

class StudentsSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      centerPadding: "0px 0px",
    };
    const { data } = this.props
    const students = data.markdownRemark.frontmatter.students
    const filteredStudents = students.filter(student => student.main)
    const validateImages = (image) => {
      if(!!image) {
        return !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      }
      return '/img/studente.png'
    }
    return (
      <Slider {...settings}>
        { filteredStudents.length > 0 && filteredStudents.map( student => (
          <div key={v4()} className="slide-wrapper">
            <div className="studentSlide">
              <div
                className="studentSlide--image"
                style={{ backgroundImage:`url(${validateImages(student.image)})` }}
              />
              <div className="studentSlide--content">
                <h3 className="title is-4">{student.fullName}</h3>
                <p className="subtitle is-5 is-spaced">
                  <a href={student.compLink} target="_blanck">{student.company}</a><br/>
                  <small>Master: {student.master}</small>
                </p>
                <div className="studentSlide--quote">
                  <span className="quote first">“</span>
                  <h4>{student.quote}</h4>
                  <span className="quote last">”</span>
                </div>
              </div>
            </div>
          </div>
          ))
        }
      </Slider>
    )
  }
}

StudentsSlider.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      students: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StudentsQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "students-page"}}) {
          frontmatter {
            students {
              fullName
              linkedin
              main
              master
              company
              compLink
              quote
              games
              altImage
              image {
                extension
                publicURL
                childImageSharp {
                  fluid(maxWidth: 300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <StudentsSlider data={data} count={count} />}
  />
)
