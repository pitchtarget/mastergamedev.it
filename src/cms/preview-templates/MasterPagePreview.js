import React from 'react'
import PropTypes from 'prop-types'
import { MasterPageTemplate } from '../../templates/master-page'

const MasterPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryParagraphs = entry.getIn(['data', 'paragraphs'])
  const paragraphs = entryParagraphs ? entryParagraphs.toJS() : []
  const entryServices = entry.getIn(['data', 'services'])
  const services = entryServices ? entryServices.toJS() : []

  if (data) {
    return (
      <MasterPageTemplate
        title={data.title}
        serviceTitle={data.serviceTitle}
        paragraphs={paragraphs}
        services={services}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MasterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MasterPagePreview
