/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import dayjs from 'dayjs'
import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
import { joke } from './joke'
dotenv.config()

export default function main() {
  const nowTime = dayjs().hour()
  if (nowTime >= 7 && nowTime < 9)
    goodMorning()

  else if (nowTime >= 11 && nowTime < 13)
    goodAfternoon()

  else if (nowTime >= 22 && nowTime < 23)
    goodEvening()

  else
  if (nowTime >= 9 && nowTime <= 18)
    joke()
  else
    console.log('当前时间不发消息')
}
