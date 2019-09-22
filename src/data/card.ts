/* eslint-disable global-require */

import convertPxToVw from '../utils/convertPxToVw';

export interface CardData {
  content: string;
  img: any;
}

export default [
  [
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
  ],
] as CardData[][];

// 单位 px
export const cardsSize: {
  width: string;
  height: string;
  marginRight: string;
  marginBottom: string;
  imageHeight: string;
  imageWidth: string;
  fontSize: string;
}[] = convertPxToVw([
  {
    width: 282,
    height: 358,
    marginRight: 34,
    marginBottom: 36,
    imageHeight: 170,
    imageWidth: 212,
    fontSize: 24,
  },
]);
