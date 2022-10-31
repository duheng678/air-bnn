// import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo(props => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const PosIndexRef = useRef(0)
  const totalDistance = useRef(0)
  const scrollRef = useRef()

  useEffect(() => {
    console.log('hh')
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    setShowRight(totalDistance.current > 0)
    setShowLeft(PosIndexRef.current > 0)
  }, [props.children])

  const controlClickHandle = bol => {
    const ElIndex = bol ? PosIndexRef.current + 1 : PosIndexRef.current - 1
    const El = scrollRef.current.children[ElIndex]
    const distance = El.offsetLeft

    scrollRef.current.style.transform = `translate(-${distance}px)`
    PosIndexRef.current = ElIndex
    setShowRight(totalDistance.current > distance)
    setShowLeft(distance > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="content">
        <div className="scroll" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
