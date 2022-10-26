import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo, highScoreInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  )
})

export default Home
