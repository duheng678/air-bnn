import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
  const contentRef = useRef()
  const { selectIndex = 0 } = props
  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    const contentWidth = contentRef.current.clientWidth
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    const totalWidth = contentRef.current.scrollWidth - contentWidth
    if (distance < 0) distance = 0
    if (distance > totalWidth) distance = totalWidth
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div ref={contentRef} className="i-content">
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number,
}

export default Indicator
