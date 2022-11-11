import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPicture = memo(props => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo,
  }))

  const { picture_urls: pictureUrls } = detailInfo
  const [showBrowser, setShowBrowser] = useState(false)
  console.log(pictureUrls)
  console.log(detailInfo)
  const showBrowserClickHandle = () => {
    setShowBrowser(true)
  }
  const closeClickHandle = () => {
    setShowBrowser(false)
  }
  return (
    <PicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item" onClick={showBrowserClickHandle}>
            <img src={pictureUrls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictureUrls?.slice(1, 5).map((item, index) => {
            return (
              <div className="item" key={item} onClick={showBrowserClickHandle}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={showBrowserClickHandle}>
        查看照片
      </div>
      {showBrowser && <PictureBrowser pictureUrls={pictureUrls} closeClick={closeClickHandle} />}
    </PicturesWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture
