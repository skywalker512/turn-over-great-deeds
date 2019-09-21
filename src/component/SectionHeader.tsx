import React from 'react';
import styled from 'styled-px2vw';
import BaseBack from './BaseBack';

const Header = styled.header`
  position: relative;
  margin: 40px 42px 0 42px;
  display: flex;
`;

const SectionHeader: React.FC = () => (
  <Header>
    <BaseBack />
  </Header>
);

export default SectionHeader;
