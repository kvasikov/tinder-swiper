import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { Status } from '../../../common/Status';
import styles from './StatusBlock.module.scss';

export const StatusBlock = observer(({ profileData }) => {
  const { isHideMoreProfileInfo } = swiperStore;

  if (!profileData.statusData || profileData.isOrganization) {
    return null;
  }

  return (
    <div
      className={cn(styles.box, {
        [styles['box--hide']]: isHideMoreProfileInfo,
      })}
    >
      <Status
        text={profileData.statusData.text}
        design={profileData.statusData.design}
        imgPath={profileData.statusData.imgPath}
      />
    </div>
  );
});
