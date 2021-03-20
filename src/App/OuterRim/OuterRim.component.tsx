import React from 'react';
import type { FC } from 'react';

import styles from './OuterRim.module.css';

const OuterRim: FC = ({ children }) => {
  return (
    <div className={styles.OuterRim}>
      {children}
    </div>
  );
};

export default OuterRim;
