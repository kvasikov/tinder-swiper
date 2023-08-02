import React, { useMemo } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { PhotoList } from '../../../../common/PhotoList';
import { swiperStore } from '../../../store';
import { TweetButton } from '../../../TweetButton';
import { LightningBlock } from '../../LightningBlock';
import { InfoBlock } from '../../InfoBlock';
import { TweetStatus } from '../TweetStatus';
import styles from './ProfileBlock.module.scss';

export const ProfileBlock = observer(({ profileData }) => {
  const photoList = useMemo(() => profileData.infoData.photoList, [profileData.infoData.photoList]);

  const photoIndex = profileData.activePhotoIndex;

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
      <div className={styles['photo-list']}>
        <TweetStatus profileData={profileData} />
        <LightningBlock />
        <PhotoList
          activePhotoIndex={photoIndex}
          photoList={photoList}
          isUnBorderBottom={!profileData.isHideMoreProfileInfo}
          onChangePhoto={onChangePhoto}
        />
      </div>
      <InfoBlock profileData={profileData} />
      <div
        className={cn(styles['tweet-wrapper'], {
          [styles['tweet-wrapper--hide']]: !profileData.isHideMoreProfileInfo,
        })}
      >
        <TweetButton />
      </div>
    </>
  );
});
