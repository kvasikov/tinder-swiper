import React, { useEffect, useState, useMemo } from 'react';
import cn from 'classnames';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../store';
import { TweetButton } from '../../../TweetButton';
import { LightningBlock } from '../../LightningBlock';
import { InfoBlock } from '../../InfoBlock';
import { TweetStatus } from '../TweetStatus';
import styles from './ProfileBlock.module.scss';

const preloadImages = (urls, allImagesLoadedCallback) => {
  let loadedCounter = 0;
  const toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback) {
    const img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
  }
};

export const ProfileBlock = observer(({ profileData }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const photoList = useMemo(() => profileData.infoData.photoList, [profileData.infoData.photoList]);

  const photoIndex = profileData.activePhotoIndex;

  // TODO: предзагружать предыдущи / текущий / следующий картинки профиля (может в сторе свайпере)
  useEffect(() => {
    // if (swiperStore.currentProfileDataId !== profileData.id) {
    //   return;
    // }

    preloadImages(photoList, () => {
      setIsImgLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoList, swiperStore.currentProfileDataId, profileData.id]);

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
      {!isImgLoading && (
        <img
          className={cn(styles['photo-img'], {
            [styles['photo-img--show']]: !profileData.isHideMoreProfileInfo,
          })}
          src={photoList[photoIndex]}
        />
      )}
      {isImgLoading && <Spin className={styles['photo-spin']} />}
      <InfoBlock profileData={profileData} />
      <div
        className={cn(styles['tweet-wrapper'], {
          [styles['tweet-wrapper--hide']]: !profileData.isHideMoreProfileInfo,
        })}
      >
        <TweetButton />
      </div>
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
