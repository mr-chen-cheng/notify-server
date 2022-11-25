/**
 * @name goodEvening
 * @description 说晚安
 */
import API from '../../api/eveningMsg'
import { wxNotify } from '../WxNotify'
// import { newsTemplate } from './templates/news'
import { textTemplate } from './templates/evening'
const getStory = async () => {
  try {
    const dataSource = await Promise.allSettled([
      API.getOneWord(), // 一言
      API.getSaylove(), // 土味情话
      API.getOneMagazines(), // one杂志
      API.getSkl(),
      API.getPyqwenan(),
      API.getHsjz(),
      API.getDialogue(),
      API.getTiangou(),
      API.getDujitang(),
      API.getWanan(),
      API.getSongLyrics(),
      API.gettangshi_songci(),
      API.getTangShi(),
    ])

    // 过滤掉异常数据
    const [oneWord, saylove, oneMagazines, skl, pyqwenan, hsjz, dialogue, tiangou, dujitang, wanan, songLyrics, tangshi_songci, tangshi]
      = dataSource.map(n => (n.status === 'fulfilled' ? n.value : null))
    const data: any = { oneWord, saylove, oneMagazines, skl, pyqwenan, hsjz, dialogue, tiangou, dujitang, wanan, songLyrics, tangshi_songci, tangshi }
    const template = textTemplate(data)
    // console.log(template)
    await wxNotify(template)
  }
  catch (e) {
    console.log('goodWord:err', e)
  }
}

// 执行函数
export const goodEvening = async () => {
  await getStory()
}
