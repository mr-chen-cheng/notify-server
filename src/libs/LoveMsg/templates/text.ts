/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, songLyrics, tangshi, netEaseCloud, dayEnglish } = data

  let text = '早安呀！！！~\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  if (['星期六', '星期日'].includes(week)) {
        text += `
    如果你已经起床啦！我向你说早安呦~，记得吃早饭呀😆\n
    嗯哼哼~今天可是${week}哦，上班别迟到了哦~`
      // }
      // else {
        text += `
    如果我还没起床呀！我就等着你起床给我说早安呦🤣
    嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😝\n`
  }

  // 添加笑话
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}\n`
  }

//   if (sayLove) {
//     text += `
// ${sayLove.content}\n`
//   }

  // 宋词
  if (songLyrics) {
    text += ` 宋词
『${songLyrics.source}』${songLyrics.content}\n`
  }
  // 唐诗
  if (tangshi) {
    text += ` 唐诗
『${tangshi.title}--${tangshi.author}』${tangshi.content}\n`
  }
//   if (oneMagazines) {
//     text += `
// 『ONE杂志』${oneMagazines.word}\n`
//   }

  if (netEaseCloud) {
    text += `
『脑筋急转弯』${netEaseCloud.quest}——${netEaseCloud.result}\n`
  }

  // 添加一句一言
//   if (oneWord) {
//     text += `
// 『一言』${oneWord.hitokoto}\n`
//   }

  // 『生活小技巧』
  if (dayEnglish) {
    text += `
      『生活小技巧』--${dayEnglish.content}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
