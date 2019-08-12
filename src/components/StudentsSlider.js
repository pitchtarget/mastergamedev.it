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
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      centerPadding: "0px 0px",
    };
    const { data } = this.props
    const students = data.markdownRemark.frontmatter.students
    const filteredStudents = students.filter(student => student.main)
    return (
      <Slider {...settings}>
        { filteredStudents.length > 0 && filteredStudents.map( student =>(
            <div key={v4()} className="studentCard">
              <div className="columns is-tablet is-gapless">
                <div
                  className="studentCard--image column"
                  style={{ backgroundImage:
                  `url(${!!student.image.childImageSharp ? student.image.childImageSharp.fluid.src : student.image})`
                  }}
                />
                <div className="column">
                  <h4 className="studentCard--content content">
                    <p className="title is-5">{student.fullName}</p>
                    <p className="subtitle is-5">{student.company}</p>
                    <p className="">{student.role}</p>
                    <p className="">{student.description}</p>
                    <p className="">{student.master}</p>
                  </h4>
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
              main
              master
              company
              role
              description
              altImage
              image {
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
