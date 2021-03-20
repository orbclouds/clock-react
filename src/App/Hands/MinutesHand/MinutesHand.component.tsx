import React from 'react';
import type { FC } from 'react';

import Hand from '../Hand';

import styles from './MinutesHand.module.css';

interface Props {
  minute: number;
}

const MinutesHand: FC<Props> = ({
  minute,
}) => {
  return (
    <Hand value={minute} base={60}>
      <div
        className={styles.MinutesHand}
      />
    </Hand>
  );
};

export default MinutesHand;
