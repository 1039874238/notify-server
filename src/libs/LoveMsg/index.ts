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
  const nowTime = dayjs().subtract(16, 'hour').hour()
  console.log(nowTime)
 if (nowTime > 6 && nowTime < 8)
    goodMorning()

  else if (nowTime > 11 && nowTime < 13)
    goodAfternoon()

  else if (nowTime > 21 && nowTime < 23)
    goodEvening()

  else
    console.log('当前时间不发消息')
}
