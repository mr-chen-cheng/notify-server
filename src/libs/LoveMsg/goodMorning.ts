/**
 * @name goodMorning
 * @description 说早安
 */
import API from '../../api/loveMsg'
import { getConfig } from '../../utils/getConfig'
import { wxNotify } from '../WxNotify'
import { textTemplate } from './templates/text'
import { textCardTemplate } from './templates/textcard'

const CONFIG = getConfig().loveMsg

// 美丽短句
const goodWord = async () => {
  try {
    // 并行请求，优响相应
    const dataSource = await Promise.allSettled([
      // API.getSaylove(), // 土味情话
      API.getCaihongpi(), // 彩虹屁
      // API.getOneWord(), // 一言
      API.getSongLyrics(), // 最美宋词
      API.gettangshi_songci(), // 最美唐诗
      API.getTangShi(), // 最美唐诗
      // API.getOneMagazines(), // one杂志
      API.getNetEaseCloud(), // 脑筋急转弯
      API.getDayEnglish(), // 每日英语
    ])

    // 过滤掉异常数据
    const [caiHongpi, songLyrics, tangshi_songci, tangshi, netEaseCloud, dayEnglish]
      = dataSource.map(n => (n.status === 'fulfilled' ? n.value : null))
    const data: any = {
      caiHongpi,
    }
    // 对象写法
    const data1: any = {
      netEaseCloud,
      dayEnglish,
    }
    const data2: any = {
      songLyrics,
      tangshi,
      tangshi_songci,
    }

    const template = textTemplate(data)
    const template1 = textTemplate(data1)
    const template2 = textTemplate(data2)
    await wxNotify(template)
    await wxNotify(template1)
    await wxNotify(template2)
  }
  catch (error) {
    console.log('goodWord:err', error)
  }
}

// 天气信息
const weatherInfo = async () => {
  try {
    const weather = await API.getWeather(CONFIG.city_name)
    if (weather) {
      const lunarInfo = await API.getLunarDate(weather.date)
      const template = textCardTemplate({ ...weather, lunarInfo })
      console.log('weatherInfo', template)

      // 发送消息
      await wxNotify(template)
    }
  }
  catch (error) {
    console.log('weatherInfo:err', error)
  }
}

// goodMorning
export const goodMorning = async () => {
  await weatherInfo()
  await goodWord()
}
