import React from 'react';
import type { FC } from 'react';

import Hand from '../Hand';

import styles from './SecondsHand.module.css';

interface Props {
  second: number;
}

const SecondsHand: FC<Props> = ({
  second,
}) => {
  return (
    <Hand value={second} base={60}>
      <div
        className={styles.SecondsHand}
      />
    </Hand>
  );
};

export default SecondsHand;
