import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { DATA_ATTR_PHOTO_WRAPPER_ID } from '../../../../constants/attributes';
import { swiperStore } from '../../store';
import { ProfileInfo } from '../../ProfileInfo';
import { LightningBlock } from '../LightningBlock';
import { InfoBlock } from '../InfoBlock';
import { TweetStatus } from './TweetStatus';
import styles from './PhotoBlock.module.scss';

export const PhotoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();

  const photoList = profileData.infoData.photoList;

  const photoIndex = profileData.activePhotoIndex;
  const activePhotoPath = photoList[photoIndex];

  const onChangePhoto = (offsetIndex) => () => {
    if (swiper.animating) {
      return;
    }

    const prevIndex = photoIndex;
    let newIndex = prevIndex + offsetIndex;
    if (newIndex >= photoList.length || newIndex < 0) {
      newIndex = prevIndex;
    }

    swiperStore.updateProfileData(profileData.id, { activePhotoIndex: newIndex });
  };

  const attrProps = { [DATA_ATTR_PHOTO_WRAPPER_ID]: profileData.id };

  return (
    <div className={styles.box}>
      <div
        {...attrProps}
        className={styles['photo-wrapper']}
        style={{
          top:
            swiperStore.isHideMoreProfileInfo && swiperStore.offsetTop ? swiperStore.offsetTop : 0,
        }}
      >
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
        <div
          className={cn(styles['photo-img'], {
            [styles['photo-img--show']]: !swiperStore.isHideMoreProfileInfo,
          })}
          style={{ backgroundImage: `url("${activePhotoPath}")` }}
        />
        <InfoBlock profileData={profileData} />
        {profileData.isStatusShow && !profileData.isOrganization && (
          <div
            className={cn(
              styles['background-status'],
              styles[`background-status--${profileData.statusData.design}`],
              {
                [styles['background-status--hide']]: swiperStore.isHideMoreProfileInfo,
              },
            )}
          />
        )}
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
