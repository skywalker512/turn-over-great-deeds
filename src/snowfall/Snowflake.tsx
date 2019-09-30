import { lerp, random } from './utils';

export interface SnowflakeProps {
  color: string;
  radius: [number, number];
  speed: [number, number];
  wind: [number, number];
  changeFrequency: number;
  image: HTMLCanvasElement | null;
}

export type SnowflakeConfig = Partial<SnowflakeProps>;

const defaultConfig: SnowflakeProps = {
  color: '#dee4fd',
  radius: [0.5, 3.0],
  speed: [1, 3],
  wind: [-0.5, 2],
  changeFrequency: 200,
  image: null,
};

interface SnowflakeParams {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  nextSpeed: number;
  nextWind: number;
}

/** An individual snowflake that will update it's location every call to `draw` */
class Snowflake {
  public config: SnowflakeConfig;

  private readonly params: SnowflakeParams;

  private framesSinceLastUpdate: number;

  private readonly image: HTMLCanvasElement;

  public constructor(
    canvas: HTMLCanvasElement,
    config: SnowflakeConfig = {},
    image: HTMLCanvasElement,
  ) {
    // Set custom config
    this.config = config;
    this.image = image;

    // Setting initial parameters
    const { radius, wind, speed } = this.fullConfig;

    this.params = {
      x: random(0, canvas.offsetWidth),
      y: random(-canvas.offsetHeight, 0),
      radius: random(...radius),
      speed: random(...speed),
      wind: random(...wind),
      nextSpeed: random(...wind),
      nextWind: random(...speed),
    };

    this.framesSinceLastUpdate = 0;
  }

  private get fullConfig() {
    return {
      ...defaultConfig,
      ...this.config,
    };
  }

  public draw = (
    canvas: HTMLCanvasElement,
    inputCtx?: CanvasRenderingContext2D,
  ) => {
    const ctx = inputCtx || canvas.getContext('2d');
    if (ctx) {
      // const image = new Image();
      // image.src =
      //   'data:image/svg+xml;base64,PHN2ZyANCiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQogd2lkdGg9IjI2cHgiIGhlaWdodD0iMjVweCI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJyZ2IoMjUxLCAxMzAsIDEyNykiDQogZD0iTS0wLjAxMiwxNS40NTAgQy0wLjAxMiwxNS40NTAgLTAuMTk2LDI1Ljc2NCA3Ljg5NywyNC45NzAgQzcuMzAwLDI1LjA1NCAxMy45NzUsOS44ODIgMjUuOTc5LDMuMDI4IEMyNC45MTEsMi42ODUgMjAuNzA0LDUuMDQ4IDIwLjg1OSwwLjgwMiBDMjEuMDEzLC0zLjQ0MyA0LjM3MSw5LjgxOCAtMC4wMTIsMTUuNDUwIFoiLz4NCjwvc3ZnPg==';
      // ctx.drawImage(image, this.params.x, this.params.y);
      // const p = new Path2D(
      //   'M-0.012,15.450 C-0.012,15.450 -0.196,25.764 7.897,24.970 C7.300,25.054 13.975,9.882 25.979,3.028 C24.911,2.685 20.704,5.048 20.859,0.802 C21.013,-3.443 4.371,9.818 -0.012,15.450 Z',
      // );
      // p.moveTo(this.params.x, this.params.y);
      // ctx.fillStyle = this.fullConfig.color;
      // ctx.fill(p);
      // ctx.beginPath();
      // ctx.arc(this.params.x, this.params.y, this.params.radius, 0, 2 * Math.PI);
      // ctx.fillStyle = this.fullConfig.color;
      // ctx.closePath();
      // ctx.fill();
      // ctx.beginPath();
      // ctx.moveTo(this.params.x, this.params.y);
      // ctx.bezierCurveTo(-0.012, 15.45, -0.196, 25.764, 7.897, 24.97);
      // ctx.bezierCurveTo(7.3, 25.054, 13.975, 9.882, 25.979, 3.028);
      // ctx.bezierCurveTo(24.911, 2.685, 20.704, 5.048, 20.859, 0.802);
      // ctx.bezierCurveTo(21.013, -3.443, 4.371, 9.818, -0.012, 15.45);
      // ctx.closePath();
      // ctx.fill('evenodd');
      // console.log(this.params);
      ctx.drawImage(this.image, this.params.x, this.params.y);
    }
  };

  private translate = (canvas: HTMLCanvasElement, framesPassed: number = 1) => {
    const { x, y, wind, speed, nextWind, nextSpeed } = this.params;

    // Update current location, wrapping around if going off the canvas
    this.params.x = (x + wind * framesPassed) % canvas.offsetWidth;
    this.params.y = (y + speed * framesPassed) % canvas.offsetHeight;

    // Update the wind and speed towards the desired values
    this.params.speed = lerp(speed, nextSpeed, 0.01);
    this.params.wind = lerp(wind, nextWind, 0.01);

    // eslint-disable-next-line no-plusplus
    if (this.framesSinceLastUpdate++ > this.fullConfig.changeFrequency) {
      this.updateTargetParams();
      this.framesSinceLastUpdate = 0;
    }
  };

  private updateTargetParams = () => {
    this.params.nextSpeed = random(...this.fullConfig.speed);
    this.params.nextWind = random(...this.fullConfig.wind);
  };

  public update = (canvas: HTMLCanvasElement, framesPassed?: number) => {
    this.translate(canvas, framesPassed);
  };
}

export default Snowflake;
