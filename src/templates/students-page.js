import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import Row from '../components/Row'
import Students from '../components/Students'
import MarkdownContent from '../components/MarkdownContent'

export const StudentsPageTemplate = ({
  image,
  altImage,
  title,
  description,
  students,
  titleProjects,
  projects,
  projectsMedia,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover align-top is-small" children/>
      <section className="section is-medium has-background-white is-horizontal-spaced">
        <div className="container">
          <div className="columns is-tablet">
            <div className="column is-8-desktop is-offset-1-desktop">
              <h1 className="title is-1">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns is-tablet">
            <div className="column is-10-desktop is-offset-1-desktop">
              <Students students={students} />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="section container">
          <SignupBox id="studentsSignup" styles="is-moveup"/>
        </section>
        <div className="section" id="progetti">
          <div className="container is-horizontal-spaced">
            <div className="columns is-tablet">
              <div className="column is-10-desktop is-offset-1-desktop">
                <h2 className="title is-2 is-spaced">{titleProjects}</h2>
                <div style={{marginBottom: '3rem'}}>
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
                              <MarkdownContent content={project.description}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    )})
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="section">
        <div className="container is-horizontal-spaced">
          <div className="columns is-tablet">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div id="tiles">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 0 && <Image src={projectsMedia[0]} alt={altImage} size="md"/>}
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 1 && <Image src={projectsMedia[1]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 2 && <Image src={projectsMedia[2]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 3 && <Image src={projectsMedia[3]} alt={altImage} size="md" vertical/>}
                    </div>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 4 && <Image src={projectsMedia[4]} alt={altImage} size="md" vertical/>}
                    </div>
                  </div>
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 5 && <Image src={projectsMedia[5]} alt={altImage} size="md"/>}
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 6 && <Image src={projectsMedia[6]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 7 && <Image src={projectsMedia[7]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 8 && <Image src={projectsMedia[8]} alt={altImage} size="md"/>}
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 9 && <Image src={projectsMedia[9]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 10 && <Image src={projectsMedia[10]} alt={altImage} styles=""/>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 11 && <Image src={projectsMedia[11]} alt={altImage} size="md" vertical/>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      { !!banner && <Row data={banner} color="primary" reverse/> }
    </>
  )
}

StudentsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  titleProjects: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  projectsMedia: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  banner: PropTypes.object,
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
        students={frontmatter.students}
        titleProjects={frontmatter.titleProjects}
        projects={frontmatter.projects}
        projectsMedia={frontmatter.projectsMedia}
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
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        students {
          fullName
          linkedin
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
        titleProjects
        projects {
          title
          description
          altImage
          image {
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1240, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        projectsMedia {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240, quality: 80) {
              ...GatsbyImageSharpFluid
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
            extension
            publicURL
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
