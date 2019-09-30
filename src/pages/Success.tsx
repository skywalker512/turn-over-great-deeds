import React, { useEffect } from 'react';
import styled from 'styled-px2vw';
import { animated, useSpring, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';
import { Theme } from '../styled';
import SuccessTitlePng from '../assets/image/SuccessTitle.png';
import SuccessCardPng from '../assets/image/SuccessCard.png';
import { BaseRedButton, BaseOrangeButton } from '../component/BaseButton';
import { RankListMyIcon, RankListRankIcon } from './RankList';
import { usePassAll } from '../utils/useFetch';
import convertFloatToInt from '../utils/convertFloatToInt';
import Snowfall from '../snowfall/Snowfal';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.color.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(animated.div)`
  background-size: cover;
  background-image: url("${SuccessTitlePng}");
  height: 134px;
  width: 600px;
`;

const Card = styled(animated.div)`
  background-size: cover;
  background-image: url("${SuccessCardPng}");
  height: 469px;
  width: 672px;
  margin: 0 auto;
  z-index: 1;
`;

const Info = styled(animated.div)`
  color: #f46b34;
  font-size: 36px;
  font-family: LeZhen, sans-serif;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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

const Control = styled(animated.div)`
  display: flex;
  & > a:nth-child(1) {
    margin-right: 40px;
  }
`;

const Snow = styled(animated.div)`
  position: absolute;
  height: 200%;
  width: 100%;
  top: 120px;
  z-index: 0;
`;

const SuccessPage: React.FC = () => {
  const Animation = useTrail(3, {
    transform: 'translate3d(0,0%,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,-100%,0)', opacity: 0 },
    config: {
      mass: 8,
      tension: 500,
      friction: 80,
    },
  });
  const SnowAnimation = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: {
      mass: 8,
      tension: 500,
      friction: 80,
    },
    delay: 1000,
  });
  const { data: result } = usePassAll();
  useEffect(() => {
    if (result.totalTime > 0) {
      localStorage.setItem('totalTime', result.totalTime.toString());
      localStorage.setItem('rank', result.rank.toString());
    }
  }, [result]);
  return (
    <>
      <Wrapper>
        <Title style={Animation[2]}>
          <Snow style={SnowAnimation}>
            <Snowfall
              // Changes the snowflake color
              color="red"
              // Controls the number of snowflakes that are created (default 150)
              snowflakeCount={40}
            />
          </Snow>
        </Title>
        <Info style={Animation[1]}>
          <RankListMyIcon />
          <span>我的: {convertFloatToInt(result.totalTime)}s</span>
          <RankListRankIcon />
          <span>排名: {result.rank}</span>
        </Info>
        <Card style={Animation[0]} />
        <Control style={Animation[2]}>
          <Back replace to="/">
            <BaseRedButton>返回首页</BaseRedButton>
          </Back>
          <Back replace to="/rankList">
            <BaseOrangeButton>排行榜</BaseOrangeButton>
          </Back>
        </Control>
      </Wrapper>
    </>
  );
};

export default SuccessPage;
