import React from 'react'
import PropTypes from 'prop-types'
import { BannerList } from '../../components/BannerList'

const BannersListPreview = ({ entry, getAsset }) => {
  debugger
  const entryBanners = entry.getIn(['data', 'banners'])
  const banners = entryBanners ? entryBanners.toJS() : []

  return (
    <BannerList banners={banners} />
  )
}

BannersListPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BannersListPreview