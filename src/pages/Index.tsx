import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-px2vw';
import IndexCardPng from '../assets/image/IndexCard.png';
import IndexBadgePng from '../assets/image/IndexBadge.png';
import IndexRulePng from '../assets/image/IndexRule.png';
import IndexOrangeButtonPng from '../assets/image/IndexOrangeButton.png';
import IndexRedButtonPng from '../assets/image/IndexRedButton.png';
import IndexShadowPng from '../assets/image/IndexShadow.png';
import BaseMask from '../component/BaseMask';
import BaseMusic from '../component/BaseMusic';
import IndexPopup from '../component/IndexPopup';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #faecc4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-image: url("${IndexCardPng}");
  background-size: cover;
  height: 1040px;
  width: 702px;
  position: absolute;
  .redShadow {
    top: 727px;
    left: 195px;
  }
  .orangeShadow {
    top: 854px;
    left: 195px;
  }
`;

const IndexBadgeIcon = styled.div`
  background-image: url("${IndexBadgePng}");
  background-size: cover;
  height: 44px;
  width: 63px;
`;

const Button = styled.div`
  background-size: cover;
  height: 115px;
  width: 315px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfade;
  font-family: LeZhen, sans-serif;
  font-size: 52px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
const IndexRedButton = styled(Button)`
  background-image: url("${IndexRedButtonPng}");
  margin-bottom: 23px;
  margin-top: 670px;
`;

const IndexOrangeButton = styled(Button)`
  background-image: url("${IndexOrangeButtonPng}");
`;

const IndexRuleIcon = styled.div`
  background-image: url("${IndexRulePng}");
  background-size: cover;
  height: 45px;
  width: 45px;
`;

const Control = styled.div`
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  height: 56px;
  display: flex;
  align-items: center;
`;

const Shadow = styled.div`
    position: absolute;
    z-index: 0;
    background-image: url("${IndexShadowPng}");
    background-repeat: no-repeat;
    background-size: contain;
    height: 104px;
    width: 311px;
`;

const IndexPage: React.FC = () => {
  const [showMask, setShowMask] = useState(false);
  const handelRuleButtonClick = () => {
    setShowMask(true);
  };
  const handelPopupClick = () => {
    setShowMask(false);
  };
  return (
    <Wrapper className="index__Wrapper">
      <Control>
        <IndexBadgeIcon />
        <BaseMusic />
        <IndexRuleIcon onClick={handelRuleButtonClick} />
      </Control>
      <Card>
        <Link replace to="/choose">
          <IndexRedButton>开始游戏</IndexRedButton>
        </Link>
        <Link replace to="/rankList">
          <IndexOrangeButton>排行榜</IndexOrangeButton>
        </Link>
        <Shadow className="redShadow" />
        <Shadow className="orangeShadow" />
      </Card>
      {showMask && (
        <BaseMask clickCallback={handelPopupClick}>
          <IndexPopup />
        </BaseMask>
      )}
    </Wrapper>
  );
};

export default IndexPage;
