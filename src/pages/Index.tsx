import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-px2vw';
import IndexCardPng from '../assets/image/IndexCard.png';
import IndexBadgePng from '../assets/image/IndexBadge.png';
import IndexRulePng from '../assets/image/IndexRule.png';
import IndexOrangeButtonPng from '../assets/image/IndexOrangeButton.png';
import IndexRedButtonPng from '../assets/image/IndexRedButton.png';
import IndexPopupPng from '../assets/image/IndexPopup.png';
import BaseMask from '../component/BaseMask';
import BaseMusic from '../component/BaseMusic';

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
`;

const IndexBadgeIcon = styled.div`
  background-image: url("${IndexBadgePng}");
  background-size: cover;
  height: 56px;
  width: 56px;
`;

const Button = styled.div`
  background-size: cover;
  height: 115px;
  width: 313px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfade;
  font-family: LeZhen, sans-serif;
  font-size: 52px;
  margin: 0 auto;
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
  height: 53px;
  width: 44px;
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

const IndexPopup = styled.div`
  background-image: url("${IndexPopupPng}");
  background-size: cover;
  height: 775px;
  width: 658px;
  margin-top: -50px;
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
