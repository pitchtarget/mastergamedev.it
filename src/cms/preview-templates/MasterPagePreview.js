import React from 'react'
import PropTypes from 'prop-types'
import { MasterPageTemplate } from '../../templates/master-page'

const MasterPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryParagraphs = entry.getIn(['data', 'paragraphs'])
  const paragraphs = entryParagraphs ? entryParagraphs.toJS() : []
  const entryPeople = entry.getIn(['data', 'people'])
  const people = entryPeople ? entryPeople.toJS() : []
  const entryServices = entry.getIn(['data', 'services'])
  const services = entryServices ? entryServices.toJS() : []
  

  if (data) {
    return (
      <MasterPageTemplate
        title={data.title}
        altImage={data.altImage}
        image={data.image}
        serviceTitle={data.serviceTitle}
        paragraphs={paragraphs}
        scientificCommittee={data.scientificCommittee}
        people={people}
        services={services}
        banner={false}
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
