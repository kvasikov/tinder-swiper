import React from 'react';
import cn from 'classnames';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import styles from './InfoBlock.module.scss';

export const InfoBlock = ({ profileData }) => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles['left-wrapper']}>
          <LeftContent profileData={profileData} />
        </div>
        <div>
          <RightContent profileData={profileData} />
        </div>
      </div>
      <div
        className={cn(styles['background-status'], {
          [styles['background-status--un-border']]: !profileData.isHideMoreProfileInfo,
          [styles[`background-status--${profileData.statusData.design}`]]:
            profileData.isStatusShow && !profileData.isOrganization,
        })}
      />
    </div>
  );
};
