import React from 'react';
import type { FC } from 'react';

import Hand from '../Hand';

import styles from './HoursHand.module.css';

interface Props {
  hour: number;
}

const HoursHand: FC<Props> = ({
  hour,
}) => {
  return (
    <Hand
      value={
        hour > 12 ? hour - 12 : hour
      }
      base={12}
    >
      <div
        className={styles.HoursHand}
      />
    </Hand>
  );
};

export default HoursHand;
