import React from 'react';
import { swiperStore } from '../store';
import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
  return (
    <div
      className={styles.box}
      style={{
        top:
          swiperStore.isHideMoreProfileInfo && swiperStore.offsetData.top
            ? swiperStore.offsetData.top
            : 0,
      }}
    >
      <div>LocationBlock</div>
    </div>
  );
};
