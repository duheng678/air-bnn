import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '../indicator'
import classNames from 'classnames'
const PictureBrowser = memo(props => {
  const { pictureUrls = [], closeClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const [showList, setShowList] = useState(true)
  const [isNext, setIsNext] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  const closeBtnClickHandle = () => {
    document.body.style.overflow = 'auto'
    closeClick()
  }
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const len = pictureUrls.length
    if (newIndex < 0) newIndex = len - 1
    if (newIndex >= len) newIndex = 0
    setSelectIndex(newIndex)
    setIsNext(isNext)
  }
  const toggleShowListHandle = () => {
    setShowList(!showList)
  }
  const imgItemClickHandle = index => {
    setIsNext(index > selectIndex)
    setSelectIndex(index)
  }
  return (
    <BrowserWrapper isNext={isNext}>
      <div className="top">
        <span className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </span>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[selectIndex]} timeout={150} classNames="fade">
              <img src={pictureUrls[selectIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {selectIndex + 1}/{pictureUrls.length}:
              </span>
              <span> room Apartment图片{selectIndex + 1}</span>
            </div>
            <div className="toggle" onClick={toggleShowListHandle}>
              隐藏照片列表
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list" style={{ height: showList ? '67px' : '0' }}>
            <Indicator selectIndex={selectIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', { active: index === selectIndex })}
                    key={item}
                    onClick={e => imgItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
}

export default PictureBrowser
