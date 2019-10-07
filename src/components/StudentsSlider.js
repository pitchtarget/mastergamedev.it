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
    console.log(filteredStudents)
    return (
      <Slider {...settings}>
        { filteredStudents.length > 0 && filteredStudents.map( student => (
            <div key={v4()} className="studentSlide">
              <div className="columns is-tablet is-gapless">
                <div
                  className="studentSlide--image column is-4"
                  style={{ backgroundImage:
                  `url(${validateImages(student.image)})`
                  }}
                />
                <div className="column">
                  <div className="studentSlide--content">
                    <h3 className="title is-5" style={{margin:'0'}}>{student.fullName}</h3><br/>
                    <span className="subtitle is-5">
                      <a href={student.compLink} target="_blanck">{student.company}</a>
                    </span><br/>
                    <small className="">Master: {student.master}</small>
                  </div>
                  <div className="studentCard--quote" style={{margin: '1.5rem'}}>
                    <span>“</span>
                    <h4>{student.quote}</h4>
                    <span>”</span>
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
