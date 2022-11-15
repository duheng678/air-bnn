import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { HomeWrapper } from './style'
import { isEmptyObject } from '@/utils'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeSectionV4 from './c-cpns/home-section-v4'
import { changeHeaderConfigAction } from '@/store/modules/main'
const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } =
    useSelector(
      state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longForInfo: state.home.longForInfo,
        plusInfo: state.home.plusInfo,
      }),
      shallowEqual
    )

  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(plusInfo) && <HomeSectionV4 infoData={plusInfo} />}
        {isEmptyObject(longForInfo) && <HomeSectionV3 infoData={longForInfo} />}

        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
