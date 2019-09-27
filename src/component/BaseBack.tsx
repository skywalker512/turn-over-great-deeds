import React from 'react';
import styled from 'styled-px2vw';
import useRouter from 'use-react-router';
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
const BaseBack: React.FC<{ callback?: () => any }> = ({ callback }) => {
  const { history } = useRouter();
  const handelClick = () => {
    const BackEvent = new Event('cback');
    window.dispatchEvent(BackEvent);
    history.replace('/');
  };
  return <Icon onClick={callback || handelClick} />;
};

export default BaseBack;
