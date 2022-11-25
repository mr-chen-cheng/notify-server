// import axios from 'axios'
import { getTian, getTian2 } from '../utils/http'

enum LoveMsgURL {
  // 韩寒主编的ONE一个杂志，本接口返回每日一句
  oneWord = 'https://v1.hitokoto.cn/?encode=json',
  oneSaylove = 'http://api.tianapi.com/saylove/index',
  oneMagazines = 'http://api.tianapi.com/one/index',
  skl = 'http://api.tianapi.com/skl/index',
  pyqwenan = 'http://api.tianapi.com/pyqwenan/index',
  hsjz = 'http://api.tianapi.com/hsjz/index',
  dialogue = 'http://api.tianapi.com/dialogue/index',
  tiangou = 'http://api.tianapi.com/tiangou/index',
  dujitang = 'http://api.tianapi.com/dujitang/index',
  wanan = 'http://api.tianapi.com/wanan/index',
  zaoan = 'http://api.tianapi.com/zaoan/index',
   // 最美宋词
   songLyrics = 'http://api.tianapi.com/zmsc/index',
   // 唐诗
   tangshi = 'http://api.tianapi.com/poetries/index',
   tangshi_songci = 'http://api.tianapi.com/songci/index', // 宋词
}
function randomPage() { // 随机数 1-40000
  return Math.ceil(Math.random() * 40000)
}
class API {
  key: string
  constructor(key?: string) {
    this.key = key || '' // 为了方便，key在 http中统一添加
  }

  getKey() {
    return this.key
  }

  // 最美宋词
  async getSongLyrics() {
    const res = await getTian<IVerseProps[]>({ url: LoveMsgURL.songLyrics })
    return res?.[0]
  }

  // 最美唐诗
  async getTangShi() {
    const res = await getTian<TangshiProps[]>({ url: LoveMsgURL.tangshi, params: { num: 1, page: randomPage() } })
    // console.log(res)
    return res?.[0]
  }

  // 最美唐诗
  async gettangshi_songci() {
    const res = await getTian<tangshi_songciProps[]>({ url: LoveMsgURL.tangshi_songci, params: { num: 1, page: randomPage() } })
    // console.log(res)
    return res?.[0]
  }

  // 一言
  async getOneWord() {
    const res = await getTian2<OneWordProps[]>({ url: LoveMsgURL.oneWord })
    return res?.[0]
  }

  //
  async getSaylove() {
    const res = await getTian2<SayloveProps[]>({ url: LoveMsgURL.oneSaylove })
    return res?.[0]
  }

  // one一个杂志
  async getOneMagazines() {
    const res = await getTian2<OneMagazines[]>({ url: LoveMsgURL.oneMagazines })
    return res?.[0]
  }

  async getSkl() {
    const res = await getTian2<sklProps[]>({ url: LoveMsgURL.skl })
    return res?.[0]
  }

  async getPyqwenan() {
    const res = await getTian2<pyqwenanProps[]>({ url: LoveMsgURL.pyqwenan })
    return res?.[0]
  }

  async getHsjz() {
    const res = await getTian2<hsjzProps[]>({ url: LoveMsgURL.hsjz })
    return res?.[0]
  }

  async getDialogue() {
    const res = await getTian2<dialogueProps[]>({ url: LoveMsgURL.dialogue })
    return res?.[0]
  }

  async getTiangou() {
    const res = await getTian2<tiangouProps[]>({ url: LoveMsgURL.tiangou })
    return res?.[0]
  }

  async getDujitang() {
    const res = await getTian2<dujitangProps[]>({ url: LoveMsgURL.dujitang })
    return res?.[0]
  }

  async getWanan() {
    const res = await getTian2<wananProps[]>({ url: LoveMsgURL.wanan })
    return res?.[0]
  }

  async getZaoan() {
    const res = await getTian2<zaoanProps[]>({ url: LoveMsgURL.zaoan })
    return res?.[0]
  }
}

export default new API()
