import React from 'react';
import type { FC } from 'react';

import useHooks from './Numbers.hooks';
import styles from './Numbers.module.css';
import { getPosition } from './Numbers.utils';

const Numbers: FC = () => {
  const {
    width,
    container,
  } = useHooks();

  const numbers = new Array(12).fill(
    null
  );

  return (
    <div className={styles.Positioning}>
      <div
        ref={container}
        className={styles.Container}
      >
        {numbers.map((_, i) => {
          if (!container.current)
            return null;

          return (
            <div
              key={i}
              className={styles.Number}
              style={getPosition(
                width,
                i + 1
              )}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Numbers;
