import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const IndexPage: React.FC<RouteComponentProps> = () => (
  <Link to={{ pathname: '/home/1' }}>1</Link>
);

export default IndexPage;
