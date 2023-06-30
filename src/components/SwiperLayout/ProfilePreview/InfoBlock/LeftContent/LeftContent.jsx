import React from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { swiperStore } from '../../../store';
import { PreviewMainInfo } from '../../../../common/PreviewMainInfo';
import { Box } from './LeftContent.styles';

export const LeftContent = observer(({ profileData }) => {
  const { isShowMoreProfileInfo } = swiperStore;
  const swiper = useSwiper();

  return (
    <Box $isHide={isShowMoreProfileInfo}>
      <PreviewMainInfo profileData={profileData} isShownMobile swiperState={swiper} />
    </Box>
  );
});
