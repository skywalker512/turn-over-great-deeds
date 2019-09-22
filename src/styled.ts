import { createGlobalStyle } from 'styled-components';
import font from './assets/font/font.css';

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

  html, body {
     position: absolute;
     ${PositionAll};
     overflow: hidden;
     color: ${Theme.color.mainFontColor};
  }
`;