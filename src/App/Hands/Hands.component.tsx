import React from 'react';
import type { FC } from 'react';

import SecondsHand from './SecondsHand';
import MinutesHand from './MinutesHand';
import HoursHand from './HoursHand';

import styles from './Hands.module.css';

interface Props {
  time: Date;
}

const Hands: FC<Props> = ({ time }) => {
  return (
    <div className={styles.Container}>
      <SecondsHand
        second={time.getSeconds()}
      />
      <MinutesHand
        minute={time.getMinutes()}
      />
      <HoursHand
        hour={time.getHours()}
      />
    </div>
  );
};

export default Hands;
