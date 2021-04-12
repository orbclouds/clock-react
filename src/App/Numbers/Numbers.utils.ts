interface Position {
  top: string;
  left: string;
}

export const getPosition = (
  width: number,
  i: number
): Position => {
  const size = width / 2;

  const rad = (i * 30 * Math.PI) / 180;

  const top = `${
    size * (1 - Math.cos(rad))
  }px`;
  const left = `${
    size * (1 + Math.sin(rad))
  }px`;

  return {
    top,
    left,
  };
};
