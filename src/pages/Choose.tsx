import React from 'react';
import { Link } from 'react-router-dom';

const ChoosePage: React.FC = () => (
  <>
    <Link to="/section/1">第1关</Link>
    <Link to="/section/2">第2关</Link>
    <Link to="/section/3">第3关</Link>
    <Link to="/section/4">第4关</Link>
    <Link to="/section/5">第5关</Link>
  </>
);

export default ChoosePage;
