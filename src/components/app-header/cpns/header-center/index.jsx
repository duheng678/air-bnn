import React, { memo } from 'react'
import SearchTabs from './c-cpns/search-tabs'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import searchTitles from '@/assets/data/search_titles.json'
import { useState } from 'react'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'
const HeaderCenter = memo(props => {
  const { isSearch, searchClick } = props
  const titles = searchTitles.map(item => item.title)
  const [tabIndex, setTabIndex] = useState(0)
  const tabClickHandle = index => {
    console.log(index)
    setTabIndex(index)
  }
  const searchClickHandle = () => {
    searchClick(!isSearch)
  }
  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} timeout={200} classNames="bar" unmountOnExit={true}>
        <div className="search-bar" onClick={searchClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} timeout={200} classNames="detail" unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickHandle} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
