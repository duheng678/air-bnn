import request from '@/service'
// 性价比房源
export function getHomeGoodPriceData() {
  return request.get({
    url: '/home/goodPrice',
  })
}

// 高分房源
export function getHomeHighScoreData() {
  return request.get({
    url: '/home/highscore',
  })
}

// 按地区请求房源数据
export function getHomeDiscountData() {
  return request.get({
    url: './home/discount',
  })
}

export function getHomeHotRecommendData() {
  return request.get({
    url: './home/hotRecommenddest',
  })
}

export function getHomeLongForData() {
  return request.get({
    url: './home/longfor',
  })
}

export function getHomePlusData() {
  return request.get({
    url: './home/plus',
  })
}
