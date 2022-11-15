import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isAlpha: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
    </DetailWrapper>
  )
})

export default Detail
