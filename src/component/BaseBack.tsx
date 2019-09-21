import React from 'react';
import styled from 'styled-px2vw';
import BaseBackPng from '../assets/image/BaseBack.png';

const Icon = styled.div`
  position: absolute;
  background-image: url(${BaseBackPng});
  background-size: cover;
  width: 26px;
  height: 36px;
  left: 0;
  top: 0;
`;
const BaseBack: React.FC = () => <Icon />;

export default BaseBack;
