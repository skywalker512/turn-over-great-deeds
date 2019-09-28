import styled from 'styled-px2vw';
import BaseOrangeButtonPng from '../assets/image/BaseOrangeButton.png';
import BaseRedButtonPng from '../assets/image/BaseRedButton.png';

const Button = styled.div`
  height: 62px;
  width: 167px;
  color: #f3efbf;
  font-size: 30px;
  line-height: 62px;
  text-align: center;
  font-family: LeZhen, sans-serif;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BaseOrangeButton = styled(Button)`
  background-image: url("${BaseOrangeButtonPng}");
`;

export const BaseRedButton = styled(Button)`
  background-image: url("${BaseRedButtonPng}");
`;
