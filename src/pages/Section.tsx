import React from 'react';
import styled from 'styled-px2vw';
import SectionHeader from '../component/SectionHeader';
import { Theme, PositionAll } from '../styled';
import SectionCard from '../component/SectionCard';

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  ${PositionAll};
  background-color: ${Theme.color.backgroundColor};
`;

const SectionPage: React.FC = () => (
  <Wrapper>
    <SectionHeader />
    <SectionCard />
  </Wrapper>
);

export default SectionPage;
