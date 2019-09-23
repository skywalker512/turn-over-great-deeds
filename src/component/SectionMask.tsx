import React from 'react';
import useRouter from 'use-react-router';
import styled from 'styled-px2vw';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import PassTilePng from '../assets/image/SectionPassTitle.png';
import SectionPassContentPng from '../assets/image/SectionPassContent.png';
import SectionPassTimePng from '../assets/image/SectionPassTime.png';
import SectionPassRecordPng from '../assets/image/SectionPassRecord.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  background-image: url(${PassTilePng});
  background-size: cover;
  width: 750px;
  height: 134px;
`;

const Content = styled.div`
  background-image: url(${SectionPassContentPng});
  background-size: cover;
  width: 660px;
  height: 793px;
`;

const Info = styled.div`
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
  const time: number[] = JSON.parse(
    window.localStorage.getItem('time') ||
      JSON.stringify(Array(5).map(() => -1)),
  );
  const result = {
    time: 10,
    isRecord: true,
  };
  const handelGoHomeClick = () => {
    window.history.go(-1);
  };
  return (
    <Wrapper>
      <Title />
      <Info>
        <Time time={result.time} />
        {result.isRecord ? <Record /> : ''}
      </Info>
      <Content />
    </Wrapper>
  );
};

export default SectionMask;
