import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { useIsDesktop } from '../../../../hooks';
import { DATA_ATTR_PHOTO_WRAPPER_ID } from '../../../../constants/attributes';
import { swiperStore } from '../../store';
import { ProfileInfo } from '../../ProfileInfo';
import { ProfileBlock } from './ProfileBlock';
import styles from './PhotoBlock.module.scss';

export const PhotoBlock = observer(({ profileData, withProfileInfo }) => {
  const isDesktop = useIsDesktop();

  const attrProps = { [DATA_ATTR_PHOTO_WRAPPER_ID]: profileData.id };

  return (
    <div
      className={cn(styles.box, {
        [styles['box--active']]: !isDesktop && !profileData.isHideMoreProfileInfo,
      })}
    >
      <div {...attrProps} className={styles['photo-wrapper']}>
        <div className={styles['tab-block']}>
          <ProfileBlock profileData={profileData} />
        </div>
      </div>
      {withProfileInfo && (
        <div
          className={cn(styles['info-wrapper'], {
            [styles['info-wrapper--hidden']]: swiperStore.currentProfileDataId !== profileData.id,
            [styles['info-wrapper--hide']]: profileData.isHideMoreProfileInfo,
          })}
        >
          <ProfileInfo profileData={profileData} />
        </div>
      )}
    </div>
  );
});
