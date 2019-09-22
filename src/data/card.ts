/* eslint-disable global-require */

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
export const cardsSize = [
  {
    width: 282,
    height: 358,
  },
];
