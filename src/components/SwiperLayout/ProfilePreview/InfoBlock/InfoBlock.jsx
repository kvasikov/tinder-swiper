import React from 'react';
import { useSwiper } from 'swiper/react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { TweetButton } from '../../TweetButton';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import styles from './InfoBlock.module.scss';

export const InfoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();

  const { isHideMoreProfileInfo } = swiperStore;

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles['left-wrapper']}>
          <LeftContent profileData={profileData} />
        </div>
        <div
          className={cn(styles['tweet-button-wrapper'], {
            [styles['tweet-button-wrapper--hide']]: isHideMoreProfileInfo,
          })}
        >
          <TweetButton swiperState={swiper} />
        </div>
        <div>
          <RightContent />
        </div>
      </div>
    </div>
  );
});
