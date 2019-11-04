import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import ImageGallery from '../components/ImageGallery'
import Row from '../components/Row'
import Students from '../components/Students'
import MarkdownContent from '../components/MarkdownContent'

export const StudentsPageTemplate = ({
  image,
  altImage,
  title,
  description,
  students,
  titleLabProjects,
  labProjects,
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
            <div className="column">
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
          <div className="is-horizontal-spaced">
            <div className="columns is-tablet">
              <div className="column is-10-desktop is-offset-1-desktop">
                <h2 className="title is-1 is-spaced">
                  {labProjects.length > 0 && titleLabProjects}
                </h2>
                <div style={{marginBottom: '3rem'}}>
                  { labProjects.length > 0 && labProjects.map( (project, id) => {
                    const reverse = id % 2
                    return (
                      <div key={v4()} className="section">
                        <div className="content">
                          <h3 className="title is-spaced is-size-3-mobile is-size-2-tablet">
                              {project.title}
                          </h3>
                          <MarkdownContent content={project.description}/>
                        </div>
                        <Image src={project.video} alt={project.altVideo} size="lg"/>
                        <ImageGallery images={project.images}/>
                      </div>
                    )})
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="is-horizontal-spaced">
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
                        { projectsMedia.length > 0 &&
                          <Image src={projectsMedia[0].image} alt={projectsMedia[0].altImage} size="md"/>
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 1 &&
                            <Image src={projectsMedia[1].image} alt={projectsMedia[1].altImage} styles=""/>
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 2 &&
                            <Image src={projectsMedia[2].image} alt={projectsMedia[2].altImage} styles=""/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 3 &&
                        <Image src={projectsMedia[3].image} alt={projectsMedia[3].altImage} size="md" vertical/>
                      }
                    </div>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 4 &&
                        <Image src={projectsMedia[4].image} alt={projectsMedia[4].altImage} size="md" vertical/>
                      }
                    </div>
                  </div>
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 5 &&
                          <Image src={projectsMedia[5].image} alt={projectsMedia[5].altImage} size="md"/>
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 6 &&
                            <Image src={projectsMedia[6].image} alt={projectsMedia[6].altImage} styles=""/>
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 7 &&
                            <Image src={projectsMedia[7].image} alt={projectsMedia[7].altImage} styles=""/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 8 &&
                          <Image src={projectsMedia[8].image} alt={projectsMedia[8].altImage} size="md"/>
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 9 &&
                            <Image src={projectsMedia[9].image} alt={projectsMedia[9].altImage} styles=""/>
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 10 &&
                            <Image src={projectsMedia[10].image} alt={projectsMedia[10].altImage} styles=""/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 11 &&
                        <Image src={projectsMedia[11].image} alt={projectsMedia[11].altImage} size="md" vertical/>
                      }
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
  titleLabProjects: PropTypes.string,
  labProjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altVideo: PropTypes.string,
      video: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          altImage: PropTypes.string,
          image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
      ),
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
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
    })
  ),
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
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
        titleLabProjects={frontmatter.titleLabProjects}
        labProjects={frontmatter.labProjects}
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
        titleLabProjects
        labProjects {
          title
          description
          altVideo
          video {
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1240, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          images {
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
