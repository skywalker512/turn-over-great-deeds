import React, { useState } from 'react';
import styled from 'styled-px2vw';
import useInterval from '../utils/useInterval';
import BaseTimePng from '../assets/image/BaseTime.png';
import { Theme } from '../styled';
import useRouter from 'use-react-router';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';

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

const SectionTime: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isRuning, setRuning] = useState(true);
  const {
    match: { params },
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const stepNum = Number(step);
  // 是否持续计时
  window.addEventListener('cardFinished', () => {
    setRuning(false);
    const time: number[] = JSON.parse(
      window.localStorage.getItem('time') ||
        JSON.stringify(Array(5).map(() => -1)),
    );
    // 如果小于以前的时间，才放入
    if (time[stepNum] > count) {
      time[stepNum] = count;
      window.localStorage.setItem('time', JSON.stringify(time));
    }
  });
  // 计算时间
  useInterval(
    () => {
      setCount(count + 1);
    },
    isRuning ? 1000 : null,
  );
  return (
    <Wrapper>
      <Icon />
      <Time>{count}</Time>
    </Wrapper>
  );
};

export default SectionTime;
