import React, { useState } from 'react';
import styled from 'styled-px2vw';
import useRouter from 'use-react-router';
import BaseBack from './BaseBack';
import convertNumberToUppercase from '../utils/convertNumberToUppercase';
import SectionTime from './SectionTime';
import { ISectionRouterProp } from '../interface/ISectionRouterProp';

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

const SectionHeader: React.FC = () => {
  const {
    match: { params },
  } = useRouter<ISectionRouterProp>();
  const { step } = params;
  const [stepNum] = useState(convertNumberToUppercase(step));
  return (
    <>
      <Header>
        <BaseBack />
        <Text>第{stepNum}关</Text>
        <SectionTime />
      </Header>
    </>
  );
};

export default SectionHeader;
