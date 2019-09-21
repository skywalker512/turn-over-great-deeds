import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => (
  <>
    <Link to="/choose">开始游戏</Link>
    <Link to="/rankList">排行榜</Link>
  </>
);

export default IndexPage;
