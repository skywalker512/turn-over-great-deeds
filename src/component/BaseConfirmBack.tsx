import React from 'react';
import styled from 'styled-px2vw';
import { animated } from 'react-spring';
import BaseCardPng from '../assets/image/BaseCard.png';
import { BaseOrangeButton, BaseRedButton } from './BaseButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled(animated.div)`
  background-image: url("${BaseCardPng}");
  background-size: cover;
  height: 628px;
  width: 535px;
  font-family: LeZhen, sans-serif;
`;

const Tilte = styled.div`
  font-size: 40px;
  color: #6a2224;
  text-align: center;
  margin-top: 190px;
  margin-bottom: 35px;
`;

const Content = styled.div`
  font-size: 28px;
  color: #f56c36;
  text-align: center;
  margin-bottom: 110px;
`;

const Control = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
  margin: 0 auto;
`;

const BaseConfirmBack: React.FC<{ confirm: () => any; cancel: () => any }> = ({
  confirm,
  cancel,
}) => (
  <Wrapper>
    <Card>
      <Tilte>是否需要返回？</Tilte>
      <Content>
        未通关返回后将无法记录
        <br />
        本关成绩哦
      </Content>
      <Control>
        <BaseOrangeButton onClick={confirm}>确定</BaseOrangeButton>
        <BaseRedButton onClick={cancel}>继续</BaseRedButton>
      </Control>
    </Card>
  </Wrapper>
);
export default BaseConfirmBack;
