import React from 'react';
import { TweetButton } from '../TweetButton';
import styles from './TweetButtonDesktop.module.scss';

export const TweetButtonDesktop = ({ swiperState }) => {
  return (
    <div className={styles.box}>
      <TweetButton swiperState={swiperState} />
    </div>
  );
};
