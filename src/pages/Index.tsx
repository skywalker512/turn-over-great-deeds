import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const IndexPage: React.FC<RouteComponentProps> = () => (
  <>
    <Link to="/choose">开始游戏</Link>
    <Link to="/rankList">排行榜</Link>
  </>
);

export default IndexPage;
