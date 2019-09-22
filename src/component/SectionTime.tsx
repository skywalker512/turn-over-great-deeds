import React, { useState } from 'react';
import styled from 'styled-px2vw';
import useInterval from '../utils/useInterval';
import BaseTimePng from '../assets/image/BaseTime.png';
import { Theme } from '../styled';

export interface IProps {
  isRunning: boolean;
}

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
`;

const Icon = styled.i`
  background-image: url(${BaseTimePng});
  background-size: cover;
  height: 34px;
  width: 34px;
`;

const Time = styled.div`
  font-family: LeZhen, serif;
  color: ${Theme.color.secondFontColor};
  width: 0;
  margin-left: 10px;
  margin-right: 38px;
  font-size: 34px;
`;

const SectionTime: React.FC<IProps> = ({ isRunning }) => {
  const [count, setCount] = useState(0);
  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? 1000 : null,
  );

  return (
    <Wrapper>
      <Icon />
      <Time>{count}</Time>
    </Wrapper>
  );
};

export default SectionTime;
