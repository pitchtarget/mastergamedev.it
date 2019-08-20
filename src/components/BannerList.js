import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import { v4 } from 'uuid'

const BannerList = ({ banners }) => {
  return (
    <>
      {banners.length > 0 && banners.map(banner => {
        return (
          <Row data={banner} />
      )})}
    </>
  )
}

BannerList.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altImage: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      cta: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default BannerList
