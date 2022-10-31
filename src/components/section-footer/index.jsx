import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo(props => {
  const { name } = props
  let showName = '显示全部'
  if (name) {
    showName = `显示全部${name}房源`
  }
  const navigate = useNavigate()
  const moreClickHandle = () => {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={name ? '#008484' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showName}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
