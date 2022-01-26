/**
 * @name joke
 * @description 说笑话
 */
import API from '../../api/loveMsg'
import { wxNotify } from '../WxNotify'

export const joke = async() => {
  const res = await API.getJoke()

  let text = '小宝贝:\n'

  text += `
 给你说两个雷人的笑话吧😝\n`

  text += `
 ${[res[0],res[1]].map(n => `『${n.title}』${n.content}`).join('\n\n')}`

  const template = {
    msgtype: 'text',
    text: {
      content: text,
    },
  }

  await wxNotify(template)
}
