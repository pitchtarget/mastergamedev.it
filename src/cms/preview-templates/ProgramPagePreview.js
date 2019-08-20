import React from 'react'
import PropTypes from 'prop-types'
import { ProgramPageTemplate } from '../../templates/program-page'

const ProgramPagePreview = ({ entry, getAsset }) => {
  debugger
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ProgramPageTemplate
        title={data.title}
        description={data.description}
        titleParagraphs={data.titleParagraphs}
        paragraphs={data.paragraphs}
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
