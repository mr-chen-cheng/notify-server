/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

export const textTemplate = (data: TextTemplateProps2) => {
  const {
    songLyrics,
    tangshi,
    tangshi_songci,
  } = data
  console.log(data)
  let text = ' '

  // 宋词
  if (songLyrics)
    text += `宋词\n 『${songLyrics.source}』\n${songLyrics.content}\n `

  if (tangshi_songci)
    text += ` 『${tangshi_songci.author}《${tangshi_songci.title}》』${tangshi_songci.content}\n`

  if (tangshi)
    text += `唐诗\n 『${tangshi.author}《${tangshi.title}》』\n${tangshi.content.replace(/(\u3002)/g, '$1\n')}`

  // 添加一句一言
  // if (oneWord) {
  //   text += `
  //   ${oneWord.hitokoto}\n `
  // }

  // if (saylove)
  //   text += ` ${saylove.content}\n `

  // if (pyqwenan)
  //   text += ` ${pyqwenan.content}\n `

  // if (oneMagazines)
  //   text += ` ${oneMagazines.word}\n `

  // if (hsjz)
  //   text += ` ${hsjz.content}\n `

  // if (tiangou)
  //   text += ` ${tiangou.content}\n `

  // if (dujitang)
  //   text += ` ${dujitang.content}\n `

  // if (dialogue)
  //   text += `  《${dialogue.source}》 ${dialogue.dialogue}\n `

  // if (skl)
  //   text += ` ${skl.content}\n `

  // if (wanan)
  //   text += ` ${wanan.content} `

  console.log(text)
  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
