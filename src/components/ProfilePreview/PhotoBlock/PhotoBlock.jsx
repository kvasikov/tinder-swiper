import React, { useState } from 'react';
import { PROFILE_LIST as mockProfileList } from '../../../mock';
import woman01 from '../../../assets/photos/woman-photo-01.png';
import woman02 from '../../../assets/photos/woman-photo-02.png';
import man01 from '../../../assets/photos/man-photo-01.png';
import { Box, PhotoImg, PhotoWrapper, BulletListWrapper, Bullet } from './PhotoBlock.styles';

const PROFILE_LIST = mockProfileList.map((profile) => ({
  ...profile,
  photoList: [woman01, woman02, man01],
}));

const PROFILE_DATA = PROFILE_LIST[0];

export const PhotoBlock = () => {
  const photoList = PROFILE_DATA.photoList; // TODO: mock

  // eslint-disable-next-line no-unused-vars
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activePhotoPath = photoList[activePhotoIndex];

  return (
    <Box>
      <PhotoWrapper>
        <BulletListWrapper>
          {photoList.map((_, index) => (
            // TODO: сделать надежный reactKey
            <Bullet key={index} />
          ))}
        </BulletListWrapper>
        <PhotoImg $imgPath={activePhotoPath} />
      </PhotoWrapper>
    </Box>
  );
};
