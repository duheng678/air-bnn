import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useRef } from 'react'
const RoomItem = memo(props => {
  const { itemData, itemWidth } = props
  const carouseRef = useRef()
  const arrowClickHandle = (isRight = true) => {
    if (isRight) {
      carouseRef.current.next()
    } else {
      carouseRef.current.prev()
    }
  }
  return (
    <ItemWrapper
      verifyColor={itemData.verify_info.text_Color || '#39576a'}
      itemWidth={itemWidth || '25%'}
    >
      <div className="inner">
        <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={e => arrowClickHandle(false)}>
              <IconArrowLeft width={24} height={24} fill="red" />
            </div>
            <div className="btn right" onClick={e => arrowClickHandle()}>
              <IconArrowRight width={24} height={24} />
            </div>
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
