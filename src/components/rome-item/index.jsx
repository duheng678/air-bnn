import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
const RoomItem = memo(props => {
  const { itemData, itemWidth, itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const carouseRef = useRef()
  const arrowClickHandle = (isRight = true, e) => {
    e.stopPropagation()
    isRight ? carouseRef.current.next() : carouseRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const len = itemData.picture_urls?.length
    if (newIndex < 0) newIndex = len - 1
    if (newIndex > len - 1) newIndex = 0
    setSelectIndex(newIndex)
  }
  const dotClickHandle = index => {
    setSelectIndex(index)
    carouseRef.current.goTo(index)
  }
  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData)
  }
  return (
    <ItemWrapper
      verifyColor={itemData.verify_info.text_Color || '#39576a'}
      itemWidth={itemWidth || '25%'}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        ) : (
          <div className="swiper">
            <div className="control">
              <div className="btn left" onClick={e => arrowClickHandle(false, e)}>
                <IconArrowLeft width={24} height={24} fill="red" />
              </div>
              <div className="btn right" onClick={e => arrowClickHandle(true, e)}>
                <IconArrowRight width={24} height={24} />
              </div>
            </div>
            <div className="indicator">
              {itemData && (
                <Indicator selectIndex={selectIndex}>
                  {itemData.picture_urls?.map((item, index) => {
                    return (
                      <div className="item" key={index} onClick={e => dotClickHandle(index)}>
                        <span
                          className={classNames('dot', {
                            active: index === selectIndex,
                            'se-active':
                              (selectIndex - 1 === index ||
                                selectIndex + 1 === index ||
                                selectIndex + 2 === index ||
                                selectIndex - 2 === index) &&
                              selectIndex > 2 &&
                              selectIndex < itemData.picture_urls.length - 3,
                            'th-active':
                              (selectIndex - 3 === index || selectIndex + 3 === index) &&
                              selectIndex > 2 &&
                              selectIndex < itemData.picture_urls.length - 3,
                          })}
                        ></span>
                      </div>
                    )
                  })}
                </Indicator>
              )}
            </div>
            <Carousel dots={false} ref={carouseRef}>
              {itemData?.picture_urls?.map(item => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
        )}

        <div className="desc">{itemData.verify_info?.messages.join('丶')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            readOnly
            precision={0.1}
            size="small"
            value={itemData.star_rating ?? 5}
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-2px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem
