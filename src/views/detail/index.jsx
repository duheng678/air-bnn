import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo,
  }))

  return <DetailWrapper>
    <DetailPicture></DetailPicture>
  </DetailWrapper>
})

export default Detail
