import React from 'react';
import styled from 'styled-px2vw';

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BaseMask: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default BaseMask;
