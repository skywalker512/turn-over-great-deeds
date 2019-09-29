import { createGlobalStyle } from 'styled-components';
import font from './assets/font/LeZhen.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './assets/constom.css';

export const Theme = {
  color: {
    backgroundColor: '#ffe2ae',
    mainFontColor: '#b1252d',
    secondFontColor: '#d16a58',
  },
};
export const PositionAll = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  // 引入字体
  ${font}

  a { text-decoration: none; }
  html, body {
     position: absolute;
     ${PositionAll};
     overflow: hidden;
     color: ${Theme.color.mainFontColor};
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
