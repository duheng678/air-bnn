import RoomItem from '@/components/rome-item'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo(props => {
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }))
  console.log(isLoading)
  return (
    <RoomsWrapper>
      <h2>共 {totalCount} 处房源</h2>
      <div className="list">
        {roomList.map(item => {
          return <RoomItem itemData={item} key={item._id}></RoomItem>
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
