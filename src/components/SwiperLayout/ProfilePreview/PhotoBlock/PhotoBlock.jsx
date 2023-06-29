import React from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { DATA_ATTR_PHOTO_WRAPPER_ID } from '../../../../constants/attributes';
import { swiperStore } from '../../store';
import { ProfileInfo } from '../../ProfileInfo';
import { LightningBlock } from '../LightningBlock';
import { InfoBlock } from '../InfoBlock';
import {
  Box,
  PhotoImg,
  PhotoWrapper,
  TopBlock,
  BulletListWrapper,
  Bullet,
  HandlerWrapper,
  HandlerPhoto,
  InfoWrapper,
  BackgroundStatus,
} from './PhotoBlock.styles';

export const PhotoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();
  const { isSwiperEnable, offsetTop, updateProfileData } = swiperStore;

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

    updateProfileData(profileData.id, { activePhotoIndex: newIndex });
  };

  const attrProps = { [DATA_ATTR_PHOTO_WRAPPER_ID]: profileData.id };

  return (
    <Box $photoList={photoList}>
      <PhotoWrapper {...attrProps} $isSwiperEnable={isSwiperEnable} $offset={offsetTop}>
        <HandlerWrapper>
          <HandlerPhoto onMouseUp={onChangePhoto(-1)} />
          <HandlerPhoto onMouseUp={onChangePhoto(1)} />
        </HandlerWrapper>
        <TopBlock>
          <BulletListWrapper $isHide={photoList.length <= 1}>
            {photoList.map((_, index) => (
              <Bullet key={index} $isActive={index <= photoIndex} />
            ))}
          </BulletListWrapper>
          <LightningBlock />
        </TopBlock>
        <PhotoImg $imgPath={activePhotoPath} $isSwiperEnable={isSwiperEnable} />
        <InfoBlock profileData={profileData} />
        {profileData.isStatusShow && (
          <BackgroundStatus
            $isSwiperEnable={isSwiperEnable}
            $design={profileData.statusData.design}
          />
        )}
      </PhotoWrapper>
      <InfoWrapper $isSwiperEnable={isSwiperEnable}>
        <ProfileInfo profileData={profileData} />
      </InfoWrapper>
    </Box>
  );
});
