import React from 'react';
import cn from 'classnames';
import styles from './TweetStatus.module.scss';

export const TweetStatus = ({ profileData }) => {
  if (typeof profileData.isTweet !== 'boolean') {
    return null;
  }

  return (
    <div
      className={cn(styles.box, {
        [styles['box--success']]: profileData.isTweet,
      })}
    >
      <span>{profileData.isTweet ? 'again' : 'nope'}</span>
    </div>
  );
};
