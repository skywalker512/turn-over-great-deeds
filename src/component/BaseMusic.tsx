import React, { useState } from 'react';
import styled from 'styled-px2vw';
import IndexMusicPng from '../assets/image/IndexMusic.png';
import IndexMusicClosePng from '../assets/image/IndexMusicClose.png';

const IndexMusicIcon = styled.div`
  background-image: url("${IndexMusicPng}");
  background-size: cover;
  height: 44px;
  width: 58px;
  margin: 0 43px 0 auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const IndexMusicCloseIcon = styled.div`
  background-image: url("${IndexMusicClosePng}");
  background-size: cover;
  height: 44px;
  width: 58px;
  margin: 0 43px 0 auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BaseMusic: React.FC = () => {
  const [isShowMusic, setShowMusic] = useState(
    !localStorage.getItem('musicStop'),
  );
  const handelMusicPlay = () => {
    window.dispatchEvent(new Event('musicPlay'));
    setShowMusic(true);
    localStorage.removeItem('musicStop');
  };
  const handelMusicStop = () => {
    window.dispatchEvent(new Event('musicStop'));
    setShowMusic(false);
    localStorage.setItem('musicStop', '1');
  };
  return (
    <>
      {isShowMusic ? (
        <IndexMusicIcon onClick={handelMusicStop} />
      ) : (
        <IndexMusicCloseIcon onClick={handelMusicPlay} />
      )}
    </>
  );
};

export default BaseMusic;
