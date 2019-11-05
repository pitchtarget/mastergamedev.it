import React from 'react'
import PropTypes from 'prop-types'
import { ProgramPageTemplate } from '../../templates/program-page'

const ProgramPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryParagraphs = entry.getIn(['data', 'paragraphs'])
  const paragraphs = entryParagraphs ? entryParagraphs.toJS() : []
  const entryPeople = entry.getIn(['data.scientificCommittee', 'people'])
  const people = entryPeople ? entryPeople.toJS() : []

  if (data) {
    return (
      <ProgramPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        titleParagraphs={data.titleParagraphs}
        paragraphs={paragraphs}
        scientificCommittee={data.scientificCommittee}
        people={people}
        bannerMaster={false}
        bannerStudents={false}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProgramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProgramPagePreview
