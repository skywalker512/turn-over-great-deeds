import React, { useState } from 'react';
import useRouter from 'use-react-router';
import styled from 'styled-px2vw';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import PassTilePng from '../assets/image/SectionPassTitle.png';
import SectionPassContentPng from '../assets/image/SectionPassContent.png';
import SectionPassTimePng from '../assets/image/SectionPassTime.png';
import SectionPassRecordPng from '../assets/image/SectionPassRecord.png';
import BaseTopPng from '../assets/image/BaseTop.png';
import SectionSwiper from './SectionSwiper';
import { BaseOrangeButton, BaseRedButton } from './BaseButton';
import useInterval from '../utils/useInterval';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(animated.div)`
  background-image: url(${PassTilePng});
  background-size: cover;
  width: 750px;
  height: 134px;
`;

const Content = styled(animated.div)`
  background-image: url(${SectionPassContentPng});
  background-size: cover;
  width: 660px;
  height: 793px;
  position: relative;
  & > div {
    padding: 134px 48px 0 50px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${BaseTopPng}");
    background-size: cover;
    margin-top: 10px;
    height: 171px;
    width: 660px;
    z-index: 2;
  }
`;

const Info = styled(animated.div)`
  display: flex;
  font-size: 34px;
  color: #fef5d3;
  font-family: LeZhen, serif;
  & > div:nth-child(1) {
    margin-right: 50px;
  }
  margin-bottom: 10px;
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const TimeIcon = styled.div`
  background-image: url(${SectionPassTimePng});
  background-size: cover;
  width: 38px;
  height: 38px;
`;

const RecordIcon = styled.div`
  background-size: cover;
  background-image: url(${SectionPassRecordPng});
  width: 48px;
  height: 69px;
`;

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  width: 366px;
  margin: 36px auto 0 auto;
`;

const Time: React.FC<{ time: number }> = ({ time }) => (
  <InfoContent>
    <TimeIcon />
    <span>用时: {time}s</span>
  </InfoContent>
);

const Record: React.FC = () => (
  <InfoContent>
    <RecordIcon />
    <span>新记录！</span>
  </InfoContent>
);

const SectionMask: React.FC = () => {
  const {
    match: { params },
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const [stepNum] = useState(Number(step));
  const [count, setCount] = useState(10);
  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null,
  );
  const time: number[] = JSON.parse(
    window.localStorage.getItem('time') ||
      JSON.stringify(Array(5).map(() => -1)),
  );
  const Animation = useTrail(3, {
    transform: 'translate3d(0,0%,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,100%,0)', opacity: 0 },
    delay: 500,
    config: {
      mass: 10,
      tension: 500,
      friction: 80,
    },
  });
  const result = {
    time: 10,
    isRecord: true,
  };
  return (
    <Wrapper>
      <Title style={Animation[1]} />
      <Info style={Animation[2]}>
        <Time time={result.time} />
        {result.isRecord ? <Record /> : ''}
      </Info>
      <Content style={Animation[0]}>
        <div>
          <SectionSwiper />
          <Control>
            <Link to="/">
              <BaseOrangeButton>返回首页</BaseOrangeButton>
            </Link>
            {count > 0 ? (
              <BaseRedButton>{count}s</BaseRedButton>
            ) : (
              <Link to={`/section/${stepNum + 1}`}>
                <BaseRedButton>下一关</BaseRedButton>
              </Link>
            )}
          </Control>
        </div>
      </Content>
    </Wrapper>
  );
};

export default SectionMask;
