interface Rotation {
  transform: string;
  MozTransform: string;
  WebkitTransform: string;
}
export const getRotation = (
  value: number,
  base: number
): Rotation => {
  const transform = `rotate(${
    90 + (value / base) * 360
  }deg)`;

  return {
    transform,
    MozTransform: transform,
    WebkitTransform: transform,
  };
};
