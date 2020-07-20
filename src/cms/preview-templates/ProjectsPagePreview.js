import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '../../templates/projects-page'

const ProjectsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryLabProjects = entry.getIn(['data', 'labProjects'])
  const labProjects = entryLabProjects ? entryLabProjects.toJS() : []
  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []
  const entryGameJam = entry.getIn(['data', 'gameJam'])
  const gameJam = entryGameJam ? entryGameJam.toJS() : []
  const entryProjectsMedia = entry.getIn(['data', 'projectsMedia'])
  const projectsMedia = entryProjectsMedia ? entryProjectsMedia.toJS() : []


  return (
    <ProjectsPageTemplate
      image={data.image}
      altImage={data.altImage}
      title={data.title}
      description={data.description}
      titleLabProjects={data.titleLabProjects}
      labProjects={labProjects}
      titleProjects={data.titleProjects}
      projects={projects}
      titleGameJam={data.titleGameJam}
      gameJam={gameJam}
      titleProjectsMedia={data.titleProjectsMedia}
      projectsMedia={projectsMedia}
      banner={false}
    />
  )
}

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectsPagePreview
