import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  console.log('right')
  const [showPanel, setShowPanel] = useState(false)
  const handleClickPanel = e => {
    setShowPanel(!showPanel)
    e.stopPropagation()
  }
  useEffect(() => {
    function handleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeAddEventListener('click', handleClick)
    }
  }, [])
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={e => handleClickPanel(e)}>
        <IconProfileMenu />
        <IconProfileAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
