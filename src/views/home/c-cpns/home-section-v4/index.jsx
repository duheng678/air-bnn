import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/rome-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV4Wrapper } from './style'

const HomeSectionV4 = memo(props => {
  const { infoData } = props
  return (
    <SectionV4Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle ?? ''} />
      <div className="card-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem key={item.picture_url} itemData={item} itemWidth="20%" />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV4
