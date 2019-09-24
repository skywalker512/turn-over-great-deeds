import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-px2vw';
import useRouter from 'use-react-router';
import IndexPage from './pages/Index';
import ChoosePage from './pages/Choose';
import RankListPage from './pages/RankList';
import SectionPage from './pages/Section';
import { PositionAll } from './styled';
import SuccessPage from './pages/Success';

const Container = styled(animated.div)`
  position: absolute;
  ${PositionAll};
`;

// @ts-ignore
const AnimatedRoute: React.FC = ({ children }) => {
  const { location } = useRouter();
  const transitions = useTransition(location, location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <Container key={key} style={props}>
      <Switch location={item}>{children}</Switch>
    </Container>
  ));
};

const App: React.FC = () => (
  <AnimatedRoute>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/choose" component={ChoosePage} />
    <Route exact path="/rankList" component={RankListPage} />
    <Route exact path="/section/:step" component={SectionPage} />
    <Route exact path="/success" component={SuccessPage} />
  </AnimatedRoute>
);

export default App;
