import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const HomePage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;
  return <div>{id}</div>;
};

export default HomePage;
