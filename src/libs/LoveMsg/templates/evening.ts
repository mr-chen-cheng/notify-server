/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

export const textTemplate = (data: TextTemplateProps2) => {
  const {
    oneWord,
    saylove,
    oneMagazines,
    skl,
    pyqwenan,
    hsjz,
    dialogue,
    tiangou,
    dujitang,
    wanan,
  } = data
  let text = ''

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }
  if (saylove) {
    text += `
『土味情话』${saylove.content}\n`
  }
  if (skl) {
    text += `
『顺口溜』${skl.content}\n`
  }
  if (pyqwenan) {
    text += `
『朋友圈文案』${pyqwenan.content}\n`
  }
  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }
  if (hsjz) {
    text += `
『分手文案』${hsjz.content}\n`
  }
  if (dialogue) {
    text += `
『经典台词』${dialogue.dialogue}\n`
  }
  if (tiangou) {
    text += `
『舔狗』${tiangou.content}\n`
  }
  if (dujitang) {
    text += `
『毒鸡汤』${dujitang.content}\n`
  }
  if (wanan) {
    text += `
${wanan.content}\n`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
