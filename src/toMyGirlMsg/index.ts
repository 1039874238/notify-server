/**
 * @name toMyGirlMsg
 * @description 每天给女朋友发送土味情话、天气信息等
 * @returns
 * 给 鱼崽 发送的内容是：
 * 2021年12月16日
 * 这是我们相识的第 200 天
 * 当前天气状况：
 * <预警信息>
 * 温度：4℃，湿度：40%，PM2.5：40.0
 * <愿你拥有比阳光明媚的心情>
 * 温度：-2℃ - 8℃
 * 东南方：3-4级
 * 空气：67
 *
 * <情话>
 */

import { getWeather } from './getWeather';
import { IOptionsConfigProps } from './typing';
import { getLoveMsgByHan } from './getLoveMsg';
import { wxNotify } from '../wxNotify';
import WXbot from '../wxNotify/WXbot';
import { config_template, config_text } from './configTemplate';
import { getInspirationalEnglish, getVerse } from './getVerse';
import { getJoke, getOneWord } from './getJoke';

// 默认值
const defaultOptions: IOptionsConfigProps = {
  city_code: 101220201,
  start_stamp: '2021-03-26',
};

// toMyGirlMsg
export async function toMyGirlMsg(options: IOptionsConfigProps = {}) {
  const mergeOptions = { ...defaultOptions, ...options };
  try {
    console.log(options);
    // 1. 卡片模式：今日天气

    // 天气数据
    const localWeatherData = await getWeather('蚌埠');
    // 获取情话
    const loveWord = await getLoveMsgByHan();
    // 获取古诗词
    const verse = await getVerse();
    // 更新模板
    const templateArgs = {
      ...localWeatherData,
      loveWord,
      verse,
    };

    const template = config_template(templateArgs, mergeOptions);
    console.log(template);
    await wxNotify(template);

    // 2. 文本模式：笑话、段子、英语

    // 获取笑话
    const joke = await getJoke();
    // 一句一言
    const oneWord = await getOneWord();
    // 今日英语
    const inspirationalEnglish = await getInspirationalEnglish();
    const text = config_text({ joke, oneWord, inspirationalEnglish });

    // wxNotify(text);
    WXbot(text);
  } catch (error) {
    console.log(error);
  }
}