// 定义天气返回值类型
interface IWeatherResponseProps {
  date: string
  week: string
  area: string
  weather: string
  /** 西南风 */
  wind: string
  /** 3-4级 */
  windsc: string
  /** 湿度：35% */
  humidity: string
  /** 降雨量 */
  pcpn: string
  /** 降雨概率 */
  pop: string
  /** 当前温度 4 */
  real: string
  /** 最高温度 8 */
  highest: string
  /** 最低温度 -2 */
  lowest: string
  /** 生活指数提示 */
  tips: string
}

interface tangshi_songciProps {
  /** 长安白日照春空，绿杨结烟垂袅风。 */
  content: string
  /** 阳春歌 */
  title: string
  /** 李白 */
  author: string
}
interface TangshiProps {
  /** 长安白日照春空，绿杨结烟垂袅风。 */
  content: string
  /** 阳春歌 */
  title: string
  /** 李白 */
  author: string
}
// 每日简报
interface DailyBriefing {
  mtime: string
  title: string
  digest: string
  source: string
  url: string
  imgsrc: string
}

// 今日头条
interface TodayHeadlines {
  ctime: string
  title: string
  description: string
  picUrl: string
  url: string
  source: string
}

// 最美宋词
interface IVerseProps {
  /** 长安白日照春空，绿杨结烟垂袅风。 */
  content: string
  /** 天行数据接口 名称 */
  source: string
}

// 生活小技巧
interface ResEnglishProps {
  content: string
}

// 韩寒主编的ONE一个杂志，本接口返回每日一句
interface OneMagazines {
  word: string
  wordfrom: string
  imgurl: string
  note: string
}

// 故事大全
interface StorybookProps {
  title: string
  content: string
}

// 脑筋急转弯
interface NetEaseCloudProps {
  quest: string
  result: string
}

// 获取农历信息
interface ResLunarDateProps {
  lunar_festival: string
  festival: string
  lubarmonth: string
  lunarday: string
  jieqi: string
}

// 土味情话
interface SayloveProps {
  content: string
}
interface sklProps {
  content: string
}
interface pyqwenanProps {
  content: string
  source: string
}
interface hsjzProps {
  content: string
}
interface dialogueProps {
  dialogue: string
  english: string
  source: string
  type: number
}
interface tiangouProps {
  content: string
}
interface dujitangProps {
  content: string
}
interface wananProps {
  content: string
}
interface zaoanProps {
  content: string
}

// 励志古言
interface InspirationalWordProps {
  saying: string
  transl: string
  source: string
}

// 雷人笑话
interface JokeProps {
  title: string
  content: string
}

// 一言
interface OneWordProps {
  hitokoto: string
  from: string
  from_who: string
  creator: string
}

/**
 * 模板
 */
// goodMorning
type TextCardTemplateProps = IWeatherResponseProps & {
  lunarInfo: ResLunarDateProps
  oneWord?: OneWordProps | null
}

// goodMorning
type TextTemplateProps = {
  caiHongpi: SayloveProps | null
  songLyrics: IVerseProps | null
  tangshi: TangshiProps | null
  tangshi_songci: tangshi_songciProps | null
  netEaseCloud: NetEaseCloudProps | null
  dayEnglish: ResEnglishProps | null
  zaoan: zaoanProps | null
  oneWord: OneWordProps | null
}
type TextTemplateProps2 = {
  // caiHongpi: SayloveProps | null
  songLyrics: IVerseProps | null
  tangshi: TangshiProps | null
  tangshi_songci: tangshi_songciProps | null
  // netEaseCloud: NetEaseCloudProps | null
  // dayEnglish: ResEnglishProps | null
  // zaoan: zaoanProps | null
  // oneWord: OneWordProps | null
}
// goodEvening
// type TextTemplateProps2 = {
//   oneWord: OneWordProps | null
//   saylove: SayloveProps | null
//   oneMagazines: OneMagazines | null
//   skl: sklProps | null
//   pyqwenan: pyqwenanProps | null
//   hsjz: hsjzProps | null
//   dialogue: dialogueProps | null
//   tiangou: tiangouProps | null
//   dujitang: dujitangProps | null
//   wanan: wananProps | null
//   zaoan: zaoanProps | null
// }
