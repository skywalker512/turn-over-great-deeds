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
  [
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
  ],
  [
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
  ],
  [
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
  ],
  [
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
    {
      content: '人民英雄纪念碑',
      img: require('../assets/image/card/1A.png'),
    },
    {
      content: '2008 年北京奥运会',
      img: require('../assets/image/card/1B.png'),
    },
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
  {
    width: 234,
    height: 296,
    marginRight: 34,
    marginBottom: 36,
    imageHeight: 140,
    imageWidth: 178,
    fontSize: 22,
  },
  {
    width: 193,
    height: 246,
    marginRight: 28,
    marginBottom: 27,
    imageHeight: 119,
    imageWidth: 148,
    fontSize: 18,
  },
  {
    width: 166,
    height: 209,
    marginRight: 29,
    marginBottom: 29,
    imageHeight: 101,
    imageWidth: 125,
    fontSize: 16,
  },
  {
    width: 149,
    height: 190,
    marginRight: 28,
    marginBottom: 30,
    imageHeight: 91,
    imageWidth: 115,
    fontSize: 14,
  },
]);
