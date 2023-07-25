import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { TweetButton } from '../../TweetButton';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import styles from './InfoBlock.module.scss';

export const InfoBlock = observer(({ profileData }) => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles['left-wrapper']}>
          <LeftContent profileData={profileData} />
        </div>
        <div
          className={cn(styles['tweet-button-wrapper'], {
            [styles['tweet-button-wrapper--hide']]: profileData.isHideMoreProfileInfo,
          })}
        >
          <TweetButton />
        </div>
        <div>
          <RightContent profileData={profileData} />
        </div>
      </div>
    </div>
  );
});
