/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

export const textTemplate = (data: TextTemplateProps2) => {
  const {
    oneWord,
    saylove,
    oneMagazines,
    // skl,
    pyqwenan,
    hsjz,
    // dialogue,
    tiangou,
    dujitang,
    wanan,
  } = data
  let text = ''

  // 添加一句一言
  if (oneWord)
    text += ` ${oneWord.hitokoto}\n `

  if (saylove)
    text += ` ${saylove.content}\n `

  if (pyqwenan)
    text += ` ${pyqwenan.content}\n `

  if (oneMagazines)
    text += ` ${oneMagazines.word}\n `

  if (hsjz)
    text += ` ${hsjz.content}\n `

  // if (dialogue)
  //   text += `『${dialogue.source}』${dialogue.dialogue}\n`

  if (tiangou)
    text += ` ${tiangou.content}\n `

  if (dujitang)
    text += ` ${dujitang.content}\n `
  // if (skl)
  //   text += ` ${skl.content}\n`
  if (wanan)
    text += ` ${wanan.content} `

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
