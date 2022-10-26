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
