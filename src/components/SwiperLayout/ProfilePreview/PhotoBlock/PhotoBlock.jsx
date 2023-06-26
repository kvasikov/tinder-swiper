import React, { useState } from 'react';
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
} from './PhotoBlock.styles';

export const PhotoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();

  const { isSwiperEnable, offsetTop } = swiperStore;
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photoList = profileData.infoData.photoList;

  const activePhotoPath = photoList[activePhotoIndex];

  const onChangePhoto = (offsetIndex) => () => {
    if (swiper.animating) {
      return;
    }

    setActivePhotoIndex((prevIndex) => {
      const newIndex = prevIndex + offsetIndex;
      if (newIndex >= photoList.length || newIndex < 0) {
        return prevIndex;
      }

      return newIndex;
    });
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
