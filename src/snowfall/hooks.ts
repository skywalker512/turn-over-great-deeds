import React, {
  CSSProperties,
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import Snowflake, { SnowflakeConfig } from './Snowflake';
import { snowfallBaseStyle } from './config';
import { getSize } from './utils';

const canvasSingleSnow = () => {
  const rgba = [
    { rgb: 'rgb(254, 155, 116)', rotate: 12, scale: 1 },
    { rgb: 'rgb(251, 130, 127)', rotate: 120, scale: 1.1 },
    { rgb: 'rgb(254, 249, 178)', rotate: 34, scale: 1.2 },
    { rgb: 'rgb(254, 155, 116)', rotate: 78, scale: 0.8 },
    { rgb: 'rgb(255, 189, 220)', rotate: 64, scale: 1 },
    { rgb: 'rgb(193, 206, 248)', rotate: 34, scale: 0.8 },
    { rgb: 'rgb(193, 206, 248)', rotate: 34, scale: 0.8 },
  ];
  return rgba.map(item => {
    const singleSnow = document.createElement('canvas');
    const ctx = singleSnow.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = item.rgb;
    ctx.scale(item.scale, item.scale);
    ctx.rotate(item.rotate);
    ctx.beginPath();
    ctx.moveTo(-0.012, 15.45);
    ctx.bezierCurveTo(-0.012, 15.45, -0.196, 25.764, 7.897, 24.97);
    ctx.bezierCurveTo(7.3, 25.054, 13.975, 9.882, 25.979, 3.028);
    ctx.bezierCurveTo(24.911, 2.685, 20.704, 5.048, 20.859, 0.802);
    ctx.bezierCurveTo(21.013, -3.443, 4.371, 9.818, -0.012, 15.45);
    ctx.closePath();
    ctx.fill('evenodd');
    return singleSnow;
  });
};

/**
 * A utility function to create a collection of snowflakes
 * @param canvasRef A ref to the canvas element
 * @param amount The number of snowflakes
 * @param config The configuration for each snowflake
 */
const createSnowflakes = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement | undefined>,
  amount: number,
  config: SnowflakeConfig,
) => {
  const snowflakes: Snowflake[] = [];
  const a = canvasSingleSnow();
  for (let i = 0; i < amount; i++) {
    const b = a[i % 7];
    snowflakes.push(
      new Snowflake(canvasRef.current as HTMLCanvasElement, config, b),
    );
  }

  return snowflakes;
};

/**
 * A utility hook to manage creating and updating a collection of snowflakes
 * @param canvasRef A ref to the canvas element
 * @param amount The number of snowflakes
 * @param config The configuration for each snowflake
 */
export const useSnowflakes = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement | undefined>,
  amount: number,
  config: SnowflakeConfig,
) => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  // Handle change of amount
  useEffect(() => {
    setSnowflakes(() => {
      const sizeDifference = amount - snowflakes.length;

      if (sizeDifference > 0) {
        return [
          ...snowflakes,
          ...createSnowflakes(canvasRef, sizeDifference, config),
        ];
      }

      if (sizeDifference < 0) {
        return snowflakes.slice(0, amount);
      }

      return snowflakes;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, canvasRef, config]);

  // Handle change of config
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    setSnowflakes(snowflakes =>
      snowflakes.map(snowflake => {
        // eslint-disable-next-line no-param-reassign
        snowflake.config = config;
        return snowflake;
      }),
    );
  }, [config]);

  return snowflakes;
};

/**
 * Returns the height and width of a HTML element, uses the `ResizeObserver` api if
 * available to detect changes to the
 * size. Falls back to listening for resize events on the window.
 * @param ref A ref to the HTML element to be measured
 */
export const useComponentSize = (
  ref: MutableRefObject<HTMLElement | undefined>,
) => {
  const [size, setSize] = useState(getSize(ref.current));

  const resizeHandler = useCallback(() => {
    if (ref.current) {
      setSize(getSize(ref.current));
    }
  }, [ref]);

  useLayoutEffect(() => {
    // @ts-ignore
    const { ResizeObserver } = window;

    if (!ref.current) return;
    resizeHandler();

    if (typeof ResizeObserver === 'function') {
      const resizeObserver = new ResizeObserver(resizeHandler);
      resizeObserver.observe(ref.current as HTMLElement);

      // eslint-disable-next-line consistent-return
      return () => resizeObserver.disconnect();
    }
    window.addEventListener('resize', resizeHandler);

    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('resize', resizeHandler);
  }, [ref, resizeHandler]);

  return size;
};

/**
 * Utility hook that merges any provided styles with the default styles
 * @param overrides The style prop passed into the component
 */
export const useSnowfallStyle = (overrides?: CSSProperties) =>
  useMemo(
    () => ({
      ...snowfallBaseStyle,
      ...(overrides || {}),
    }),
    [overrides],
  );
