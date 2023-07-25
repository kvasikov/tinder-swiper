import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../store';
import { LightningBlock } from '../../LightningBlock';
import { InfoBlock } from '../../InfoBlock';
import { TweetStatus } from '../TweetStatus';
import styles from './ProfileBlock.module.scss';

export const ProfileBlock = observer(({ profileData }) => {
  const photoList = profileData.infoData.photoList;

  const photoIndex = profileData.activePhotoIndex;
  const activePhotoPath = photoList[photoIndex];

  const onChangePhoto = (offsetIndex) => () => {
    if (swiperStore.swiper.animating) {
      return;
    }

    const prevIndex = photoIndex;
    let newIndex = prevIndex + offsetIndex;
    if (newIndex >= photoList.length || newIndex < 0) {
      newIndex = prevIndex;
    }

    swiperStore.updateProfileData(profileData.id, { activePhotoIndex: newIndex });
  };

  return (
    <>
      <div className={styles['handler-wrapper']}>
        <div className={styles['handler-photo']} onMouseUp={onChangePhoto(-1)} />
        <div className={styles['handler-photo']} onMouseUp={onChangePhoto(1)} />
      </div>
      <TweetStatus profileData={profileData} />
      <div className={styles['top-block']}>
        <div
          className={cn(styles['bullet-list-wrapper'], {
            [styles['bullet-list-wrapper--hide']]: photoList.length <= 1,
          })}
        >
          {photoList.map((_, index) => (
            <div
              className={cn(styles.bullet, {
                [styles['bullet--active']]: index <= photoIndex,
              })}
              key={index}
            />
          ))}
        </div>
        <LightningBlock />
      </div>
      <img
        className={cn(styles['photo-img'], {
          [styles['photo-img--show']]: !profileData.isHideMoreProfileInfo,
        })}
        src={activePhotoPath}
        alt={profileData.id}
      />
      <InfoBlock profileData={profileData} />
      {profileData.isStatusShow && !profileData.isOrganization && (
        <div
          className={cn(
            styles['background-status'],
            styles[`background-status--${profileData.statusData.design}`],
            {
              [styles['background-status--hide']]: profileData.isHideMoreProfileInfo,
            },
          )}
        />
      )}
    </>
  );
});
