import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { v4 } from 'uuid'
import TeacherCard from '../components/cards/teacherCard'

class TeachersShortList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomTeachers: this.randomize(),
    }
  }

  randomize() {
    const teachers = this.props.data.markdownRemark.frontmatter.teachers
    let listNum = []
    let filteredTeachers = []

    while (listNum.length < 4) {
      let randomNum = Math.floor(Math.random() * Math.floor(teachers.length))
      let hasValue = listNum.includes(randomNum)
      !hasValue && listNum.push(randomNum)
      !hasValue && filteredTeachers.push(teachers[randomNum])
    }
    return filteredTeachers
  }

  render() {
    const { randomTeachers } = this.state
    return (
      <div className="columns is-multiline is-centered">
        { randomTeachers.length > 0 && randomTeachers.map( teacher =>(
            <div key={v4()}
              className="column is-3-desktop is-4-tablet is-full-mobile is-flex hide-last-child"
              style={{justifyContent: "center"}}
            >
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
        markdownRemark(frontmatter: { templateKey: { eq: "teachers-page"}}) {
          frontmatter {
            teachers {
              fullName
              role
              bio
              link
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
    render={(data, count) => <TeachersShortList data={data} count={count} />}
  />
)
