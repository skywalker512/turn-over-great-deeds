import styled from 'styled-px2vw';
import BaseOrangeButtonPng from '../assets/image/BaseOrangeButton.png';
import BaseRedButtonPng from '../assets/image/BaseRedButton.png';

const Button = styled.div`
  background-size: cover;
  height: 62px;
  width: 164px;
  color: #f3efbf;
  font-size: 30px;
  line-height: 62px;
  text-align: center;
  font-family: LeZhen, sans-serif;
`;

export const BaseOrangeButton = styled(Button)`
  background-image: url("${BaseOrangeButtonPng}");
`;

export const BaseRedButton = styled(Button)`
  background-image: url("${BaseRedButtonPng}");
`;
