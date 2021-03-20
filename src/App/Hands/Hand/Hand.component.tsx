import React from 'react';
import type { FC } from 'react';

import styles from './Hand.module.css';
import { getRotation } from './Hand.utils';

interface Props {
  base: number;
  value: number;
}

const Hand: FC<Props> = ({
  base,
  value,
  children,
}) => {
  return (
    <div
      className={styles.Hand}
      style={getRotation(value, base)}
    >
      <div className={styles.Half}>
        {children}
      </div>
      <div className={styles.Half} />
    </div>
  );
};

export default Hand;
