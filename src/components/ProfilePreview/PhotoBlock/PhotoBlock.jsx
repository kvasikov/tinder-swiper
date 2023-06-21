import React, { useState } from 'react';
import { PROFILE_LIST as mockProfileList } from '../../../mock';
import woman01 from '../../../assets/photos/woman-photo-01.png';
import woman02 from '../../../assets/photos/woman-photo-02.png';
import man01 from '../../../assets/photos/man-photo-01.png';
import { LightningBlock } from '../LightningBlock';
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

// TODO: mock
const PROFILE_LIST = mockProfileList.map((profile) => ({
  ...profile,
  photoList: [woman01, woman02, man01],
}));

const PROFILE_DATA = PROFILE_LIST[0];

export const PhotoBlock = () => {
  const photoList = PROFILE_DATA.photoList; // TODO: mock

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

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
      <PhotoWrapper>
        <HandlerWrapper>
          <HandlerPhoto onClick={onChangePhoto(-1)} />
          <HandlerPhoto onClick={onChangePhoto(1)} />
        </HandlerWrapper>
        <TopBlock>
          <BulletListWrapper>
            {photoList.map((_, index) => (
              // TODO: сделать надежный reactKey
              <Bullet key={index} $isActive={index <= activePhotoIndex} />
            ))}
          </BulletListWrapper>
          <LightningBlock />
        </TopBlock>
        <PhotoImg $imgPath={activePhotoPath} />
      </PhotoWrapper>
    </Box>
  );
};
