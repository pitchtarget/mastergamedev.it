import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import Layout from '../components/Layout'
import SignupBox from '../components/SignupBox'
import Image from '../components/elements/Image'
import ImageGallery from '../components/ImageGallery'
import Row from '../components/Row'
import MarkdownContent from '../components/MarkdownContent'

export const ProjectsPageTemplate = ({
  image,
  altImage,
  titleLabProjects,
  labProjects,
  titleProjects,
  projects,
  titleGameJam,
  gameJam,
  titleProjectsMedia,
  projectsMedia,
  banner,
}) => {
  return (
    <>
      <Image src={image} alt={altImage} styles="cover align-top is-small" children/>
      <div className="container is-horizontal-spaced">
        <div className="columns is-tablet">
          <div className="column is-10-widescreen is-offset-1-widescreen">
            <section className="section">
              <h1 className="title is-1 is-spaced">
                {titleLabProjects}
              </h1>
              { labProjects.length > 0 && labProjects.map( (project, id) => {
                const reverse = id % 2
                return (
                  <div key={v4()}>
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
            </section>
          </div>
        </div>
      </div>
      

      <section className="section container">
        <SignupBox id="studentsSignup"/>
      </section>

      <div className="container is-horizontal-spaced">
        <div className="columns is-tablet">
          <div className="column is-10-widescreen is-offset-1-widescreen">
            <section className="section">
              {!!titleProjects && <h2 className="title is-1 is-spaced">{titleProjects}</h2>}
              { projects.length > 0 && projects.map( (project, id) => {
                const reverse = id % 2
                return (
                  <div key={v4()}>
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
            </section>
            <section className="section">
              { !!titleGameJam &&  <h2 className="title is-1 is-spaced">{titleGameJam}</h2> }
              { gameJam.length > 0 && gameJam.map( (jam, id) => {
                const reverse = id % 2
                return (
                  <div key={v4()}>
                    <div
                      className="columns is-vcentered"
                      style={{flexDirection: reverse ? 'row-reverse' : 'row'}}
                    >
                      <div className="column">
                        <Image src={jam.image} alt={jam.alt}/>
                      </div>
                      <div className="column">
                        <div className="content">
                          <h3 className="title is-spaced is-size-3-mobile is-size-2-tablet">
                              {jam.title}
                          </h3>
                          <MarkdownContent content={jam.description}/>
                        </div>
                      </div>
                    </div>
                  </div>
                )})
              }
            </section>
            <section className="section">
              <h3 className="title is-2 is-spaced">{titleProjectsMedia}</h3>
              <div id="tiles">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 0 &&
                          <Image
                            src={projectsMedia[0].image}
                            alt={projectsMedia[0].altImage} size="md"
                          />
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 1 &&
                            <Image
                              src={projectsMedia[1].image}
                              alt={projectsMedia[1].altImage} styles=""
                            />
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 2 &&
                            <Image
                              src={projectsMedia[2].image}
                              alt={projectsMedia[2].altImage} styles=""
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 3 &&
                        <Image
                          src={projectsMedia[3].image}
                          alt={projectsMedia[3].altImage} size="md" vertical
                        />
                      }
                    </div>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 4 &&
                        <Image
                          src={projectsMedia[4].image}
                          alt={projectsMedia[4].altImage} size="md" vertical
                        />
                      }
                    </div>
                  </div>
                  <div className="tile is-vertical is-8">
                    <div className="tile is-parent">
                      <div className="tile is-child">
                        { projectsMedia.length > 5 &&
                          <Image
                            src={projectsMedia[5].image}
                            alt={projectsMedia[5].altImage} size="md"
                          />
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 6 &&
                            <Image
                              src={projectsMedia[6].image}
                              alt={projectsMedia[6].altImage} styles=""
                            />
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 7 &&
                            <Image
                              src={projectsMedia[7].image}
                              alt={projectsMedia[7].altImage} styles=""
                            />
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
                          <Image
                            src={projectsMedia[8].image}
                            alt={projectsMedia[8].altImage} size="md"
                          />
                        }
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 9 &&
                            <Image
                              src={projectsMedia[9].image}
                              alt={projectsMedia[9].altImage} styles=""
                            />
                          }
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          { projectsMedia.length > 10 &&
                            <Image
                              src={projectsMedia[10].image}
                              alt={projectsMedia[10].altImage} styles=""
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child">
                      { projectsMedia.length > 11 &&
                        <Image
                          src={projectsMedia[11].image}
                          alt={projectsMedia[11].altImage} size="md" vertical
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      { !!banner && <Row data={banner} color="primary" reverse/> }
    </>
  )
}

ProjectsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
  titleGameJam: PropTypes.string,
  gameJam: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      altImage: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  titleProjectsMedia: PropTypes.string,
  projectsMedia: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
    })
  ),
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const banner = data.bannersData.frontmatter.banners.filter(banner => banner.name === 'partners')
  return (
    <Layout>
      <ProjectsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        titleLabProjects={frontmatter.titleLabProjects}
        labProjects={frontmatter.labProjects}
        titleProjects={frontmatter.titleProjects}
        projects={frontmatter.projects}
        titleGameJam={frontmatter.titleGameJam}
        gameJam={frontmatter.gameJam}
        titleProjectsMedia={frontmatter.titleProjectsMedia}
        projectsMedia={frontmatter.projectsMedia}
        banner={banner[0]}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
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

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
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
        titleGameJam
        gameJam {
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
        titleProjectsMedia
        projectsMedia {
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
