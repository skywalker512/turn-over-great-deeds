import { useEffect, useRef } from 'react';

function useTimeout(callback: () => any, delay: number | null) {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
    return () => {};
  }, [delay]);
}

export default useTimeout;
