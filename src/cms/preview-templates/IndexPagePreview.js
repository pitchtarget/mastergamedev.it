import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        mainCover={data.mainCover}
        topSignIn={data.topSignIn}
        partnersSection={data.partnersSection}
        schoolSection={data.schoolSection}
        studentsSection={data.studentsSection}
        bottomSignIn={data.bottomSignIn}
        teachersSection={data.teachersSection}
        newsSection={data.newsSection}
        partners={[]}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
