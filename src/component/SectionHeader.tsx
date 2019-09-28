import React, { useState } from 'react';
import styled from 'styled-px2vw';
import useRouter from 'use-react-router';
import BaseBack from './BaseBack';
import convertNumberToUppercase from '../utils/convertNumberToUppercase';
import SectionTime from './SectionTime';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';
import BaseMask from './BaseMask';
import BaseConfirmBack from './BaseConfirmBack';
import BaseMusic from './BaseMusic';

const Header = styled.header`
  position: relative;
  margin: 40px 42px 0 42px;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-family: LeZhen, serif;
  font-size: 36px;
`;

const Music = styled.div`
  position: absolute;
  right: 75px;
  & > div {
    height: 34px;
    width: 46px;
  }
`;

const SectionHeader: React.FC = () => {
  const {
    match: { params },
    history,
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const [stepNum] = useState(convertNumberToUppercase(step));
  const [showConfirm, setShowConfirm] = useState(false);
  const handelBackClick = () => {
    setShowConfirm(true);
    window.dispatchEvent(new Event('cardSuspend'));
  };
  const handelConfirmClick = () => {
    history.replace('/');
  };
  const handelCancelClick = () => {
    setShowConfirm(false);
    window.dispatchEvent(new Event('cardContinue'));
  };
  return (
    <>
      <Header>
        <BaseBack callback={handelBackClick} />
        <Text>第{stepNum}关</Text>
        <Music>
          <BaseMusic />
        </Music>
        <SectionTime />
      </Header>
      {showConfirm && (
        <BaseMask>
          <BaseConfirmBack
            cancel={handelCancelClick}
            confirm={handelConfirmClick}
          />
        </BaseMask>
      )}
    </>
  );
};

export default SectionHeader;
