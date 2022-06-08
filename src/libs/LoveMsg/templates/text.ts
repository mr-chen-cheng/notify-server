/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

const weekMap: any = {
  0: '星期天',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
}

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, songLyrics, tangshi_songci, tangshi, netEaseCloud, dayEnglish } = data

  let text = '早安呀！！！~'

  // 工作日/休息日，需要排除节假日
  const date = new Date()
  const week: number = date.getDay()
  if ([0, 6].includes(week)) {
    text += `
    如果我还没起床呀！我就等着你起床给我说早安呦🤣
    嗯哼~，既然今天是${weekMap[week]}，就让你再睡会懒觉~下次可不能啦~😝`
  }
  else {
    text += `
    如果你已经起床啦！我向你说早安呦~，记得吃早饭呀😆
    嗯哼哼~今天可是${weekMap[week]}哦，美好的一天开始了~`
  }

  // 彩虹屁：
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}`
  }

  // 『生活小技巧』
  if (dayEnglish) {
    text += `
『生活小技巧』--${dayEnglish.content}`
  }
  if (netEaseCloud) {
    text += `
『脑筋急转弯』${netEaseCloud.quest}——${netEaseCloud.result}`
  }
  // 宋词
  if (songLyrics) {
    text += `
『${songLyrics.source}』\n${songLyrics.content}`
  }
  // 宋词
  if (tangshi_songci) {
    text += `
『${tangshi_songci.title}--${tangshi_songci.author}』\n${tangshi_songci.content.replace(/(\u3002)/g, '$1\n')}`
  }
  // 唐诗
  if (tangshi) {
    text += `
『${tangshi.title}--${tangshi.author}』\n${tangshi.content.replace(/(\u3002)/g, '$1\n')}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
