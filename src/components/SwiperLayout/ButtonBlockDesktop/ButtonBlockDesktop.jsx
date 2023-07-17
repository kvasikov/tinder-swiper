import React from 'react';
import { swiperStore } from '../store';
import { CircleIcon } from '../../common/CircleIcon';
import styles from './ButtonBlockDesktop.module.scss';

export const ButtonBlockDesktop = ({ profileData, swiperState }) => {
  const { updateProfileData } = swiperStore;

  const onPrevProfileClick = () => {
    if (swiperState.animating) {
      return;
    }

    swiperState.slidePrev(250, false);
  };

  const onNextProfileClick = () => {
    if (swiperState.animating) {
      return;
    }

    swiperState.slideNext(250, false);

    if (profileData.isTweet === null) {
      setTimeout(() => {
        updateProfileData(profileData.id, { isTweet: false });
      }, 500);
    }
  };

  return (
    <div className={styles.box}>
      <CircleIcon design='transparent' kind='arrowUp' onClick={onPrevProfileClick} />
      <CircleIcon className={styles['icon-down']} kind='arrowUp' onClick={onNextProfileClick} />
    </div>
  );
};
