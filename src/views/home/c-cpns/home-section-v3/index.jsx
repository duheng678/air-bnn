import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo(props => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />

      <div className="card-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <LongForItem key={item.picture_url} itemData={item} />
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
