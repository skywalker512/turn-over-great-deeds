import { createGlobalStyle } from 'styled-components';
import font from './assets/font/font.css';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  // 引入字体
  ${font}
`;
