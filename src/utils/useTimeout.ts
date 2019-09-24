import { useEffect, useRef } from 'react';

function useTimeout(callback: () => any, delay: number | null) {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export default useTimeout;
