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
  let text = ''
  if (caiHongpi) {
    text += '早安呀！！！~'

    // 工作日/休息日，需要排除节假日
    const week: number = new Date().getDay()
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    text += `\n${caiHongpi.content}`
  }

  // 『生活小技巧』
  if (dayEnglish)
    text += `『生活小技巧』--${dayEnglish.content}\n`

  if (netEaseCloud)
    text += `『脑筋急转弯』--${netEaseCloud.quest}——${netEaseCloud.result}`

  // 宋词
  if (songLyrics)
    text += `宋词\n 『${songLyrics.source}』\n${songLyrics.content}\n `

  if (tangshi_songci)
    text += ` 『${tangshi_songci.author}《${tangshi_songci.title}》』${tangshi_songci.content}\n`

  if (tangshi)
    text += `唐诗\n 『${tangshi.author}《${tangshi.title}》』\n${tangshi.content.replace(/(\u3002)/g, '$1\n')}`

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
