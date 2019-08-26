import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import Students from '../components/Students'

export const StudentsPageTemplate = ({
  image,
  altImage,
  title,
  description,
  projects,
  titleStudents,
  students,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover align-top is-small" children/>
      <section className="section is-medium has-background-white">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-8 is-offset-1">
              <h1 className="title is-1">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns is-tablet">
            <div className="column is-10 is-offset-1">
              { projects.length > 0 && projects.map( (project, id) => {
                const reverse = id % 2
                return (
                  <div key={v4()} className="section">
                    <div
                      className="columns is-vcentered"
                      style={{flexDirection: reverse ? 'row-reverse' : 'row'}}
                    >
                      <div className="column">
                        <Image src={project.image} alt={project.alt}/>
                      </div>
                      <div className="column">
                        <div className="content">
                          <h3 className="title is-spaced is-size-3-mobile is-size-2-tablet">
                              {project.title}
                          </h3>
                          <p>
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )})
              }
            </div>
          </div>
        </div>
      </section>
      <div className="container signupBox__regular is-moveup">
        <SignupBox />
      </div>
      <div className="container is-horizontal-spaced">
        <div className="columns is-tablet">
          <div className="column is-10 is-offset-1">
            <div className="section is-medium">
              <h2 className="title is-2 is-spaced">{titleStudents}</h2>
              <Students students={students} />
            </div>
          </div>
        </div>
      </div>
      <Row data={banner} color="primary" reverse/>
    </>
  )
}

StudentsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.object,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  students: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
}

const StudentsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <StudentsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        projects={frontmatter.projects}
        titleStudents={frontmatter.titleStudents}
        students={frontmatter.students}
        banner={banner[0]}
      />
    </Layout>
  )
}

StudentsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    bannersData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        banners: PropTypes.array,
      }),
    }),
  }),
}

export default StudentsPage

export const studentsPageQuery = graphql`
  query StudentsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projects {
          title
          description
          altImage
          image {
            childImageSharp {
              fluid(maxWidth: 1240, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        titleStudents
        students {
          fullName
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
    bannersData: markdownRemark(frontmatter: { templateKey: { eq: "banners"}}) {
      frontmatter {
        banners {
          name
          title
          text
          cta
          link
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
