import React from 'react';
import { swiperStore } from '../store';
import styles from './GeoBlock.module.scss';

export const GeoBlock = () => {
  return (
    <div
      className={styles.box}
      style={{
        top: swiperStore.isHideMoreProfileInfo && swiperStore.offsetTop ? swiperStore.offsetTop : 0,
      }}
    >
      <div>GEO content</div>
    </div>
  );
};
