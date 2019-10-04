import React, { useEffect, useRef } from 'react';
import Mp3 from '../assets/1.mp3';

const BaseAudio: React.FC = () => {
  const mp3Element = useRef<HTMLAudioElement>();
  useEffect(() => {
    if (localStorage.getItem('musicStop')) {
      // eslint-disable-next-line no-unused-expressions
      mp3Element.current && mp3Element.current.pause();
    }
    window.addEventListener('musicPlay', () => {
      // eslint-disable-next-line no-unused-expressions
      mp3Element.current && mp3Element.current.play();
    });
    window.addEventListener('musicStop', () => {
      // eslint-disable-next-line no-unused-expressions
      mp3Element.current && mp3Element.current.pause();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mp3Element.current]);

  // @ts-ignore
  // eslint-disable-next-line jsx-a11y/media-has-caption
  return <audio src={Mp3} autoPlay loop ref={mp3Element} />;
};

export default BaseAudio;
