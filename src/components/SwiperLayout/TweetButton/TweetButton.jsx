import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { setScrollToTopProfile } from '../utils';
import { useIsDesktop } from '../../../hooks';
import { swiperStore } from '../store';
import { CustomIcon } from '../../common/CustomIcon';
import styles from './TweetButton.module.scss';

export const TweetButton = observer(({ swiperState, isFromMoreBlock }) => {
  const buttonRef = useRef(null);

  const { currentProfileData, updateProfileData, setMoreInfoStatus } = swiperStore;
  const isDesktop = useIsDesktop();

  const onTweet = () => {
    if (!currentProfileData.id || swiperState.animating) {
      return;
    }

    const execTweet = () => {
      if (!isDesktop) {
        setMoreInfoStatus(true);
        swiperState.enable();
      }

      swiperState.slideNext(250, false);

      setTimeout(() => {
        updateProfileData(currentProfileData.id, { isTweet: true });
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
      <CustomIcon kind='tweet' />
      <span className={styles.text}>Tweet</span>
    </button>
  );
});
