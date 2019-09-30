import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// @ts-ignore
import Analytics from 'react-router-ga';
import { Normalize } from 'styled-normalize';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styled';

ReactDOM.render(
  <HashRouter>
    <Analytics id={process.env.REACT_APP_GA}>
      <Normalize />
      <GlobalStyle />
      <App />
    </Analytics>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
