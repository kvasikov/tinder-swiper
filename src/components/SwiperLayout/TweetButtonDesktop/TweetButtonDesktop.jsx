import React, { useRef } from 'react';
import { TweetButton } from '../TweetButton';
import styles from './TweetButtonDesktop.module.scss';

export const TweetButtonDesktop = ({ swiperState }) => {
  const wrapperRef = useRef(null);

  return (
    <div className={styles.box} ref={wrapperRef}>
      <TweetButton swiperState={swiperState} />
    </div>
  );
};
