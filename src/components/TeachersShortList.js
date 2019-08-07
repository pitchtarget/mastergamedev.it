import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { v4 } from 'uuid'
import TeacherCard from '../components/cards/teacherCard'

class TeachersShortList extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.markdownRemark.frontmatter.teachers

    let filteredTeachers = []
    let listNum = []
    for (let i = 0; i < 10 ; i++) {
      let randomNum = Math.floor(Math.random() * Math.floor(teachers.length))
      let hasValue = listNum.includes(randomNum)
      !hasValue && listNum.length <= 3 && listNum.push(randomNum)
    }

    filteredTeachers = [
      teachers[listNum[0]],
      teachers[listNum[1]],
      teachers[listNum[2]],
      teachers[listNum[3]],
    ]

    return (
      <div className="columns is-multiline is-mobile">
        { teachers.length > 0 && filteredTeachers.map( teacher =>(

            <div key={v4()} className="column is-3-desktop is-6-touch">
              <TeacherCard teacher={teacher}/>
            </div>
          ))
        }
      </div>
    )
  }
}

TeachersShortList.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      teachers: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeachersQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "teachers"}}) {
          frontmatter {
            teachers {
              fullName
              role
              bio
              link
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
    render={(data, count) => <TeachersShortList data={data} count={count} />}
  />
)
