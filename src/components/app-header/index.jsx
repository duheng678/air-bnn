import React, { memo, useEffect, useRef, useState } from 'react'
import HeaderCenter from './cpns/header-center'
import HeaderLeft from './cpns/header-left'
import HeaderRight from './cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from 'styled-components'
import { useLocation } from 'react-router-dom'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(true)
  const prevY = useRef(0)
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig,
  }))

  const { isFixed } = headerConfig
  const { scrollY = 0 } = useScrollPosition()

  const searchClickHandle = val => {
    setIsSearch(val)
  }
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/home') {
      setIsSearch(false)
    }
  }, [location.pathname])
  console.log(scrollY)
  const isAlpha = headerConfig.isAlpha && scrollY === 0
  console.log(location.pathname)
  if (location.pathname === '/home') {
    // if(scrollY>30){}
    if (!isSearch) prevY.current = scrollY

    if (isSearch && Math.abs(prevY.current - scrollY) > 30) setIsSearch(false)
    if (!isSearch && scrollY < 30) setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchClick={searchClickHandle} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={() => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
