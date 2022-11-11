import RoomItem from '@/components/rome-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(props => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }))
  console.log(isLoading)
  const itemClickHandle = val => {
    dispatch(changeDetailInfoAction(val))
    navigate('/detail')
  }
  return (
    <RoomsWrapper>
      <h2>共 {totalCount} 处房源</h2>
      <div className="list">
        {roomList.map(item => {
          return <RoomItem itemData={item} key={item._id} itemClick={itemClickHandle}></RoomItem>
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
