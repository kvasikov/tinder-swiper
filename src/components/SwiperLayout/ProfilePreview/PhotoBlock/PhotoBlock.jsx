import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../../store';
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
} from './PhotoBlock.styles';

export const PhotoBlock = observer(({ profileData }) => {
  const { isSwiperEnable } = swiperStore;
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activePhotoPath = profileData.photoList[activePhotoIndex];

  const onChangePhoto = (offsetIndex) => () => {
    setActivePhotoIndex((prevIndex) => {
      const newIndex = prevIndex + offsetIndex;
      if (newIndex >= profileData.photoList.length || newIndex < 0) {
        return prevIndex;
      }

      return newIndex;
    });
  };

  return (
    <Box $photoList={profileData.photoList}>
      <PhotoWrapper>
        <HandlerWrapper>
          <HandlerPhoto onClick={onChangePhoto(-1)} />
          <HandlerPhoto onClick={onChangePhoto(1)} />
        </HandlerWrapper>
        <TopBlock>
          <BulletListWrapper $isHide={profileData.photoList.length <= 1}>
            {profileData.photoList.map((_, index) => (
              // TODO: сделать надежный reactKey
              <Bullet key={index} $isActive={index <= activePhotoIndex} />
            ))}
          </BulletListWrapper>
          <LightningBlock />
        </TopBlock>
        <PhotoImg $imgPath={activePhotoPath} $isSwiperEnable={isSwiperEnable} />
        <InfoBlock />
      </PhotoWrapper>
    </Box>
  );
});
