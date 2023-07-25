import React, { useRef } from 'react';
import { toJS } from 'mobx';
import { setScrollToTopProfile } from '../utils';
import { useIsDesktop } from '../../../hooks';
import { swiperStore } from '../store';
import { BackgroundIcon } from '../../common/BackgroundIcon';
import styles from './TweetButton.module.scss';

export const TweetButton = ({ isFromMoreBlock }) => {
  const buttonRef = useRef(null);
  const isDesktop = useIsDesktop();

  const onTweet = () => {
    if (!swiperStore.currentProfileData.id || swiperStore.swiper.animating) {
      return;
    }

    const execTweet = () => {
      if (!isDesktop) {
        swiperStore.updateProfileData(swiperStore.currentProfileData.id, {
          isHideMoreProfileInfo: true,
        });
        swiperStore.swiper.enable();
      }

      const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

      swiperStore.swiper.slideNext(250, false);

      setTimeout(() => {
        swiperStore.updateProfileData(prevProfileDataId, {
          isTweet: true,
          isHideMoreProfileInfo: true,
        });
      }, 500);
    };

    if (isFromMoreBlock && !isDesktop) {
      setScrollToTopProfile(buttonRef.current, execTweet, 10);
      return;
    }

    execTweet();
  };

  return (
    <button className={styles.box} type='button' ref={buttonRef} onClick={onTweet}>
      <BackgroundIcon iconKind='heartOutline' />
      <span className={styles.text}>GO</span>
    </button>
  );
};
