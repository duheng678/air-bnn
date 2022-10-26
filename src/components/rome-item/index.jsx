import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'

const RoomItem = memo(props => {
  const { itemData } = props
  return (
    <ItemWrapper verifyColor={itemData.verify_info.text_Color || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
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
