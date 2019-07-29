import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { v4 } from 'uuid'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PartnerCard from '../components/cards/partnerCard'

export const IndexPageTemplate = ({
  mainCover,
  topSignIn,
  partnersSection,
  schoolSection,
  studentsSection,
  bottomSignIn,
  teachersSection,
  newsSection,
  partners,
  students,
  teachers,
}) => {
    const filteredPartners = partners.filter(partner => partner.main)
    const filteredStudents = students.filter(student => student.main)
    const teachersNum = teachers.length
    const randomTeachers = []
    // to be create a random filter for teachers

    return (
      <>
        <section className="hero">
          <div className="container">

            <div id="maincover" className="columns">
              <div className="column is-5 is-offset-1">
                <h1 className="content">
                  <p className="title is-1">{mainCover.heading}</p>
                  <p className="subtitle is-5">{mainCover.subheading}</p>
                </h1>
                {mainCover.cta}
              </div>
              <div className="column">
                <img src={!!mainCover.image.childImageSharp ? mainCover.image.childImageSharp.fluid.src : mainCover.image}/>
              </div>
            </div>

            <div id="topSignUpBox" className="">
              <div className="columns is-gapless">
                <div className="column is-3">
                  <img src={!!topSignIn.image.childImageSharp ? topSignIn.image.childImageSharp.fluid.src : topSignIn.image}/>
                </div>
                <div className="column">
                  <h2 className="content">
                    <p className="title is-5">{topSignIn.heading}</p>
                    <p className="subtitle is-5">{topSignIn.subheading}</p>
                  </h2>
                </div>
                <div className="column is-3">
                  {topSignIn.cta}
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="partnersSection">
          <div className="container">
            <h3 className="content has-text-centered">
              <p className="title is-2">{partnersSection.heading}</p>
              <p className="subtitle is-5">{partnersSection.subheading}</p>
            </h3>
          </div>
          <div className="columns is-centered" style={{overflow: "scroll"}}>
            { filteredPartners.length > 0 && filteredPartners.map( partner => (
                <div key={v4()} className="column is-2">
                  <PartnerCard partner={partner}/>
                </div>
              ))
            }
          </div>
          <p className="has-text-centered">{partnersSection.cta}</p>
        </section>

        <section id="schoolSection">
          <div className="container">
            <div className="columns is-gapeless"
            style={{
              backgroundImage: `url(${
                !!schoolSection.image.childImageSharp ? schoolSection.image.childImageSharp.fluid.src : schoolSection.image
              })`
            }}>
              <div className="column is-4 is-offset-1">
                <h3 className="content">
                  <p className="title is-2">{schoolSection.heading}</p>
                  <p className="subtitle is-5">{schoolSection.subheading}</p>
                </h3>
                {schoolSection.cta}
              </div>
            </div>
            <div className="columns">
              { schoolSection.bullet.length > 0 && schoolSection.bullet.map( bullet =>(
                  <div key={v4()} className="column is-desktop-3">
                    <div className="box">
                      <h4 className="content">
                        <p className="title is-4">{bullet.heading}</p>
                        <p className="subtitle is-4">{bullet.subheading}</p>
                        <p className="">{bullet.cta}</p>
                      </h4>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section id="studentsSection">
          <div className="container">
            <div className="columns is-gapeless">
              <div className="column is-4 is-offset-1">
                <h3 className="content">
                  <p className="title is-2">{studentsSection.heading}</p>
                  <p className="subtitle is-5">{studentsSection.subheading}</p>
                </h3>
                {studentsSection.cta}
              </div>
            </div>
            <div className="columns is-centered" style={{overflow: "scroll"}}>
              { filteredStudents.length > 0 && filteredStudents.map( student =>(
                  <div key={v4()} className="column is-12">
                    <div className="box">
                      <h4 className="content">
                        <p className="title is-5">{student.fullName}</p>
                        <p className="subtitle is-5">{student.company}</p>
                        <p className="">{student.role}</p>
                        <p className="">{student.description}</p>
                        <p className="">{student.master}</p>
                      </h4>
                    </div>
                  </div>
                ))
              }
            </div>

            <div id="bottomSignUpBox" className="">
              <div className="columns is-gapless">
                <div className="column is-3">
                  <img src={!!bottomSignIn.image.childImageSharp ? bottomSignIn.image.childImageSharp.fluid.src : bottomSignIn.image}/>
                </div>
                <div className="column">
                  <h2 className="content">
                    <p className="title is-5">{bottomSignIn.heading}</p>
                    <p className="subtitle is-5">{bottomSignIn.subheading}</p>
                  </h2>
                </div>
                <div className="column is-3">
                  {bottomSignIn.cta}
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="teachersSection" className="">
          <div className="container">
            <div className="columns is-gapeless">
              <div className="column is-4 is-offset-1">
                <h3 className="content">
                  <p className="title is-2">{teachersSection.heading}</p>
                  <p className="subtitle is-5">{teachersSection.subheading}</p>
                </h3>
                {teachersSection.cta}
              </div>
            </div>
          </div>
        </section>

        {/*<BlogRoll />*/}
      </>
    )
}
IndexPageTemplate.propTypes = {
  mainCover: PropTypes.object,
  topSignIn: PropTypes.object,
  partnersSection: PropTypes.object,
  schoolSection: PropTypes.object,
  studentsSection: PropTypes.object,
  bottomSignIn: PropTypes.object,
  teachersSection: PropTypes.object,
  newsSection: PropTypes.object,
  partners: PropTypes.array,
  students: PropTypes.array,
  teachers: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const partnersList = data.partnersData.frontmatter
  const studentsList = data.studentsData.frontmatter
  const teachersList = data.teachersData.frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        mainCover={frontmatter.mainCover}
        topSignIn={frontmatter.topSignIn}
        partnersSection={frontmatter.partnersSection}
        schoolSection={frontmatter.schoolSection}
        studentsSection={frontmatter.studentsSection}
        bottomSignIn={frontmatter.bottomSignIn}
        teachersSection={frontmatter.teachersSection}
        newsSection={frontmatter.newsSection}
        partners={partnersList.partners}
        students={studentsList.students}
        teachers={teachersList.teachers}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    partnersData: PropTypes.object,
    studentsData: PropTypes.object,
    teachersData: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    teachersData: markdownRemark(frontmatter: { templateKey: { eq: "teachers"}}) {
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
    partnersData: markdownRemark(frontmatter: { templateKey: { eq: "partners"}}) {
      frontmatter {
        partners {
          name
          main
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
    studentsData: markdownRemark(frontmatter: { templateKey: { eq: "students-page"}}) {
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainCover {
          image {
            childImageSharp {
              fluid(maxWidth: 1980, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          cta
          link
        }
        topSignIn {
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          cta
          link
        }
        partnersSection {
          heading
          subheading
          cta
          link
        }
        schoolSection {
          image {
            childImageSharp {
              fluid(maxWidth: 1980, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          cta
          link
          bullet {
            heading
            subheading
            cta
            link
          }
        }
        studentsSection {
          heading
          subheading
          cta
          link
        }
        bottomSignIn {
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          cta
          link
        }
        teachersSection {
          heading
          subheading
          cta
          link
        }
        newsSection {
          heading
          cta
          link
        }
      }
    }
  }
`
