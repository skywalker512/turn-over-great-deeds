import React, { MouseEventHandler } from 'react';
import styled from 'styled-px2vw';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseMask: React.FC<{ delay?: number; clickCallback?: () => any }> = ({
  children,
  clickCallback,
  delay = 0,
}) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay });
  const handelStopPropagation: MouseEventHandler = e => {
    e.stopPropagation();
  };
  return (
    <Wrapper style={props} onClick={clickCallback || undefined}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handelStopPropagation}>{children}</div>
    </Wrapper>
  );
};

export default BaseMask;
