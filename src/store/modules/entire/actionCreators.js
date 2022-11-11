import { getEntireRoomList } from '@/service/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
})
export const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
})
export const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
})
export const changeIsLoadingAction = isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
})
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeIsLoadingAction(true))
    dispatch(changeCurrentPageAction(page))
    // const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(page)
    dispatch(changeIsLoadingAction(false))

    const { list: roomList, totalCount } = res
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
