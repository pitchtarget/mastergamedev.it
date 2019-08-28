import React from 'react'
import PropTypes from 'prop-types'
import BannerList from '../../components/BannerList'
import SignupBox from '../../components/SignupBox'

const BannersListPreview = ({ entry, getAsset }) => {
  const signupBox = entry.getIn(['data', 'box'])
  const entryBanners = entry.getIn(['data', 'banners'])
  const banners = entryBanners ? entryBanners.toJS() : []

  return (
    <>
      <SignupBox data={signupBox} />
      <BannerList banners={banners} />
    </>
  )
}

BannersListPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BannersListPreview
