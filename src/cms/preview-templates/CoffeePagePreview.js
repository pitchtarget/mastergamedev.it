import React from 'react'
import PropTypes from 'prop-types'
import { CoffeePageTemplate } from '../../templates/coffee-page'

const CoffeePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CoffeePageTemplate
        cover={data.cover}
        altCover={data.altCover}
        image={data.image}
        altImage={data.altImage}
        title={data.title}
        subtitle={data.subtitle}
        shortDesc={data.shortDesc}
        description={data.description}
        banner={false}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CoffeePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CoffeePagePreview
