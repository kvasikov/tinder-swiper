import React from 'react';
import cn from 'classnames';
import { swiperStore } from '../../store';
import { Status } from '../../../common/Status';
import styles from './StatusBlock.module.scss';

export const StatusBlock = ({ profileData }) => {
  if (!profileData.statusData || profileData.isOrganization) {
    return null;
  }

  return (
    <div
      className={cn(styles.box, {
        [styles['box--hide']]: swiperStore.isHideMoreProfileInfo,
      })}
    >
      <Status
        text={profileData.statusData.text}
        design={profileData.statusData.design}
        imgPath={profileData.statusData.imgPath}
      />
    </div>
  );
};
