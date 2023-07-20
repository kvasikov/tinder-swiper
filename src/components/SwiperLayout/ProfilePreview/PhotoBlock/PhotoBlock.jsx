import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { DATA_ATTR_PHOTO_WRAPPER_ID } from '../../../../constants/attributes';
import { swiperStore } from '../../store';
import { ProfileInfo } from '../../ProfileInfo';
import { ProfileBlock } from './ProfileBlock';
import styles from './PhotoBlock.module.scss';

export const PhotoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();

  const attrProps = { [DATA_ATTR_PHOTO_WRAPPER_ID]: profileData.id };

  return (
    <div className={styles.box}>
      <div {...attrProps} className={styles['photo-wrapper']}>
        <div
          className={cn(styles['tab-block'], {
            [styles['tab-block--hide']]: swiperStore.activeTabValue !== 'profile',
          })}
        >
          <ProfileBlock profileData={profileData} />
        </div>
      </div>
      <div
        className={cn(styles['info-wrapper'], {
          [styles['info-wrapper--hide']]: swiperStore.isHideMoreProfileInfo,
        })}
      >
        <ProfileInfo swiperState={swiper} profileData={profileData} />
      </div>
    </div>
  );
});
