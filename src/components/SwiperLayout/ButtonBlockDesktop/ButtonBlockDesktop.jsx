import React from 'react';
import { swiperStore } from '../store';
import { CircleIcon } from '../../common/CircleIcon';
import styles from './ButtonBlockDesktop.module.scss';

export const ButtonBlockDesktop = ({ profileData }) => {
  const onPrevProfileClick = () => {
    if (swiperStore.swiper.animating) {
      return;
    }

    swiperStore.swiper.slidePrev(250, false);
  };

  const onNextProfileClick = () => {
    if (swiperStore.swiper.animating) {
      return;
    }

    swiperStore.swiper.slideNext(250, false);

    if (profileData.isTweet === null) {
      setTimeout(() => {
        swiperStore.updateProfileData(profileData.id, {
          isTweet: false,
          isHideMoreProfileInfo: true,
        });
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
