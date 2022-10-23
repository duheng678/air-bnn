import React, { memo } from 'react'
import HeaderCenter from './cpns/header-center'
import HeaderLeft from './cpns/header-left'
import HeaderRight from './cpns/header-right'
import { HeaderWrapper } from './style'
const AppHeader = memo(() => {
  console.log('header')
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
