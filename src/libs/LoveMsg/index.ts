/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
dotenv.config()

const { MESSAGE_TYPE } = process.env
console.log(MESSAGE_TYPE)
export default function main() {
  // goodMorning()
  // const date = new Date()
  // if (!MESSAGE_TYPE) {
  //   if (date.getHours() >= 6 && date.getHours() < 10)
  //     goodMorning()

  //   else if (date.getHours() >= 12 && date.getHours() <= 14)
  //     goodAfternoon()

  //   else if (date.getHours() >= 21 && date.getHours() < 24)
  goodEvening()
  // }

  // if (MESSAGE_TYPE === 'goodAfternoon')
  //   goodAfternoon()

  // else if (MESSAGE_TYPE === 'goodEvening')
  //   goodEvening()
  // else if (MESSAGE_TYPE === 'goodMorning')
  //   goodMorning()
}
