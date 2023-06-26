import React from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { swiperStore } from '../../../store';
import { CustomIcon } from '../../../../common/CustomIcon';
import { Box, IconWrapper, InfoIconWrapper } from './RightContent.styles';

export const RightContent = observer(() => {
  const swiper = useSwiper();
  const { isSwiperEnable, setSwiperStatus } = swiperStore;

  const onInfoClick = () => {
    if (isSwiperEnable) {
      setSwiperStatus(false);
      swiper.disable();
    } else {
      setSwiperStatus(true);
      swiper.enable();
    }
  };

  return (
    <Box>
      <IconWrapper>
        <CustomIcon kind='chat' />
      </IconWrapper>
      <InfoIconWrapper $isSwiperEnable={isSwiperEnable} onClick={onInfoClick}>
        <CustomIcon kind='arrowUp' />
      </InfoIconWrapper>
    </Box>
  );
});
