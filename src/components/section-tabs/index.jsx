import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo(props => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClickHandle = (e, index, item) => {
    console.log(e)
    e.clientX = 0
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={index}
              onClick={e => itemClickHandle(e, index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTabs
