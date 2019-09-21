import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './pages/Index';
import ChoosePage from './pages/Choose';
import RankListPage from './pages/RankList';
import SectionPage from './pages/Section';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/choose" component={ChoosePage} />
    <Route exact path="/rankList" component={RankListPage} />
    <Route exact path="/section/:step" component={SectionPage} />
  </Switch>
);

export default App;
