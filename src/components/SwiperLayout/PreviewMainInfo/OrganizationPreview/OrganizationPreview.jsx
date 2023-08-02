import React from 'react';
import cn from 'classnames';
import { swiperStore } from '../../store';
import { BadgeProfilePreview } from '../../../common/BadgeProfilePreview';
import styles from './OrganizationPreview.module.scss';

export const OrganizationPreview = ({ profileData, withMarginTop = false, theme = 'dark' }) => {
  const onOrgClick = () => {
    swiperStore.updateProfileData(profileData.id, {
      isOrgProfileShow: true,
    });
  };

  const photoSrc = profileData.infoData.photoList[0];

  return (
    <div
      className={cn(styles.box, {
        [styles['box--offset']]: withMarginTop,
      })}
    >
      <span className={cn(styles.title, styles[`title--${theme}`])}>Организатор</span>
      <BadgeProfilePreview
        photoSrc={photoSrc}
        title={profileData.infoData.name}
        theme={theme}
        onClick={onOrgClick}
      />
    </div>
  );
};
