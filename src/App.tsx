import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import HomePage from './pages/home';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route path="/home/:id" component={HomePage} />
  </Switch>
);

export default App;
