import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(props => {
  const dispatch = useDispatch()
  const { totalCount, currentPage, roomList } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }))
  const totalPage = Math.ceil(totalCount / 20)
  const startSize = currentPage * 20 + 1
  const endSize = (currentPage + 1) * 20
  console.log(currentPage)
  const pageChangeHandle = (e, pageCount) => {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount))
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startSize}-{endSize}个房源，共{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination
