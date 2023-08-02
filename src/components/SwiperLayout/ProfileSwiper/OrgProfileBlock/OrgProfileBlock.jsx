import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { usePrevious } from '../../../../hooks';
import { ProfileInfo } from '../../ProfileInfo';
import { LightningBlock } from '../../ProfilePreview/LightningBlock';
import { CircleIcon } from '../../../common/CircleIcon';
import { PhotoList } from '../../../common/PhotoList';
import { swiperStore } from '../../store';
import styles from './OrgProfileBlock.module.scss';

export const OrgProfileBlock = observer(() => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevProfileId = usePrevious(swiperStore.currentProfileDataId);

  useEffect(() => {
    if (
      prevProfileId &&
      swiperStore.currentProfileDataId &&
      prevProfileId !== swiperStore.currentProfileDataId
    ) {
      setPhotoIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevProfileId, swiperStore.currentProfileDataId]);

  const onChangePhoto = (offsetIndex) => () => {
    setPhotoIndex((prevIndex) => {
      let newIndex = prevIndex + offsetIndex;
      if (newIndex >= photoList.length || newIndex < 0) {
        newIndex = prevIndex;
      }

      return newIndex;
    });
  };

  if (!swiperStore.currentProfileData.infoData) {
    return null;
  }

  const onClose = () => {
    swiperStore.updateProfileData(swiperStore.currentProfileData.id, { isOrgProfileShow: false });
  };

  const isShow = swiperStore.currentProfileData.isOrgProfileShow;
  const photoList = swiperStore.currentProfileData.infoData.photoList;

  return (
    <div
      className={cn(styles.box, {
        [styles['box--show']]: isShow,
      })}
    >
      <div className={styles['photo-wrapper']}>
        <CircleIcon
          className={styles.back}
          kind='arrowUp'
          design='pink-transparent'
          onClick={onClose}
        />
        <LightningBlock />
        <PhotoList
          activePhotoIndex={photoIndex}
          photoList={photoList}
          isUnBorderBottom
          onChangePhoto={onChangePhoto}
        />
        <CircleIcon
          className={styles.chat}
          kind='chat'
          design='light'
          onClick={() => console.log('ЧАТ')}
        />
      </div>
      <div>
        {/* TODO: брать данные организатора, а не данные организации как тут сейчас */}
        <ProfileInfo profileData={swiperStore.currentProfileData} />
      </div>
    </div>
  );
});
