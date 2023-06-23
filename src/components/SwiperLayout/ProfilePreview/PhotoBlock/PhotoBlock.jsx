import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../../store';
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
} from './PhotoBlock.styles';

export const PhotoBlock = observer(({ profileData }) => {
  const { isSwiperEnable, offsetTop } = swiperStore;
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photoList = profileData.infoData.photoList;

  const activePhotoPath = photoList[activePhotoIndex];

  const onChangePhoto = (offsetIndex) => () => {
    setActivePhotoIndex((prevIndex) => {
      const newIndex = prevIndex + offsetIndex;
      if (newIndex >= photoList.length || newIndex < 0) {
        return prevIndex;
      }

      return newIndex;
    });
  };

  return (
    <Box $photoList={photoList}>
      <PhotoWrapper
        $isSwiperEnable={isSwiperEnable}
        $offset={offsetTop}
        data-photo-wrapper-id={profileData.id}
      >
        <HandlerWrapper>
          <HandlerPhoto onClick={onChangePhoto(-1)} />
          <HandlerPhoto onClick={onChangePhoto(1)} />
        </HandlerWrapper>
        <TopBlock>
          <BulletListWrapper $isHide={photoList.length <= 1}>
            {photoList.map((_, index) => (
              // TODO: сделать надежный reactKey
              <Bullet key={index} $isActive={index <= activePhotoIndex} />
            ))}
          </BulletListWrapper>
          <LightningBlock />
        </TopBlock>
        <PhotoImg $imgPath={activePhotoPath} $isSwiperEnable={isSwiperEnable} />
        <InfoBlock profileData={profileData} />
      </PhotoWrapper>
      <InfoWrapper $isSwiperEnable={isSwiperEnable}>
        <ProfileInfo profileData={profileData} />
      </InfoWrapper>
    </Box>
  );
});
