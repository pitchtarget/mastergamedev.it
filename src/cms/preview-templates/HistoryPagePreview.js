import React from 'react'
import PropTypes from 'prop-types'
import { HistoryPageTemplate } from '../../templates/history-page'

const HistoryPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryParagraphs = entry.getIn(['data', 'paragraphs'])
  const paragraphs = entryParagraphs ? entryParagraphs.toJS() : []
  const entrySteps = entry.getIn(['data', 'services'])
  const historySteps = entrySteps ? entrySteps.toJS() : []

  if (data) {
    return (
      <HistoryPageTemplate
        title={data.title}
        historyTitle={data.historyTitle}
        paragraphs={paragraphs}
        historySteps={historySteps}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HistoryPagePreview
