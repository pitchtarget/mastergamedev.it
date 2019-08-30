import React from 'react'
import PropTypes from 'prop-types'
import { BlendPageTemplate } from '../../templates/blend-page'

const BlendPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryBlend = entry.getIn(['data', 'students'])
  const blends = entryBlend ? entryBlend.toJS() : []
  const entrySelection = entry.getIn(['data', 'projects'])
  const blendSelection = entrySelection ? entrySelection.toJS() : []

  return (
    <BlendPageTemplate
      image={data.image}
      title={data.title}
      description={data.description}
      blendSelection={blendSelection}
      blendTitle={data.blendTitle}
      blends={blends}
      banner={false}
    />
  )
}

BlendPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlendPagePreview
