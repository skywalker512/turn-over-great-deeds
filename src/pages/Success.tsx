import React from 'react';
import styled from 'styled-px2vw';
import { animated, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';
import { Theme } from '../styled';
import SuccessTitlePng from '../assets/image/SuccessTitle.png';
import SuccessCardPng from '../assets/image/SuccessCard.png';
import { BaseRedButton } from '../component/BaseButton';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.color.backgroundColor};
`;

const Title = styled(animated.div)`
  background-size: cover;
  background-image: url("${SuccessTitlePng}");
  height: 134px;
  width: 600px;
  margin: 120px auto 20px auto;
`;

const Card = styled(animated.div)`
  background-size: cover;
  background-image: url("${SuccessCardPng}");
  height: 469px;
  width: 672px;
  margin: 0 auto;
`;

const Info = styled(animated.div)`
  text-align: center;
  color: #f46b34;
  font-size: 36px;
  font-family: LeZhen, sans-serif;
  margin-bottom: 40px;
`;

const Back = styled(Link)`
  & > div {
    height: 80px;
    width: 211px;
    line-height: 80px;
    font-size: 36px;
    margin: 110px auto 0 auto;
  }
`;

const SuccessPage: React.FC = () => {
  const Animation = useTrail(3, {
    transform: 'translate3d(0,0%,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,-100%,0)', opacity: 0 },
    delay: 500,
    config: {
      mass: 8,
      tension: 500,
      friction: 80,
    },
  });
  const result = {
    rank: 4,
    totalTime: 300,
  };
  return (
    <Wrapper>
      <Title style={Animation[2]} />
      <Info style={Animation[1]}>
        <div>您的成绩: {result.totalTime}s</div>
        <div>排名: {result.rank}</div>
      </Info>
      <Card style={Animation[0]} />
      <animated.div style={Animation[2]}>
        <Back to="/">
          <BaseRedButton>返回首页</BaseRedButton>
        </Back>
      </animated.div>
    </Wrapper>
  );
};

export default SuccessPage;
