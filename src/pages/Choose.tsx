import React from 'react';
import styled from 'styled-px2vw';
import useRouter from 'use-react-router';
import { Theme } from '../styled';
import ChooseTitle from '../assets/image/ChooseTitle.png';
import ChooseCard from '../assets/image/ChooseCard.png';
import BaseUntiePng from '../assets/image/BaseUntie.png';
import BaseLockUpPng from '../assets/image/BaseLockUp.png';
import BaseBack from '../component/BaseBack';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.color.backgroundColor};
`;

export const Back = styled.div`
  position: absolute;
  top: 40px;
  left: 42px;
`;

const Title = styled.div`
  background-image: url(${ChooseTitle});
  background-size: cover;
  height: 206px;
  width: 647px;
  margin: 70px auto 0 auto;
`;

const Card = styled.div`
  background-image: url(${ChooseCard});
  background-size: cover;
  height: 948px;
  width: 667px;
  margin: 0 auto;
  & > div {
    padding: 300px 100px 60px 100px;
  }
`;

const Item = styled.div`
  font-size: 36px;
  font-family: LeZhen, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const LockUpIcon = styled.div`
  background-image: url("${BaseLockUpPng}");
  background-size: cover;
  height: 50px;
  width: 52px;
`;

const BaseUntieIcon = styled.div`
  background-image: url("${BaseUntiePng}");
  background-size: cover;
  height: 55px;
  width: 52px;
`;

const time = Array(5).fill(-1);

const ChoosePage: React.FC = () => {
  const { history } = useRouter();
  const handelClick = (step: number) => {
    history.push(`/section/${step}`);
  };
  return (
    <Wrapper>
      <Back>
        <BaseBack />
      </Back>
      <Title />
      <Card>
        <div>
          {time.map((item, index) => {
            const isLocked = !(item > -1 || index === 0);
            return (
              <Item
                key={index}
                style={{ color: isLocked ? '#ca9880' : '#f56c36' }}
                onClick={() => isLocked || handelClick(index + 1)}
              >
                <div className="index">{index + 1}</div>
                <div className="time">{item > -1 ? item : '待挑战'}</div>
                {isLocked ? <LockUpIcon /> : <BaseUntieIcon />}
              </Item>
            );
          })}
        </div>
      </Card>
    </Wrapper>
  );
};

export default ChoosePage;
