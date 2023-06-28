import React from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { swiperStore } from '../../../store';
import { SuperLikeBlock } from './SuperLikeBlock';
import { Box, MoreInfoIcon } from './RightContent.styles';

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
      <SuperLikeBlock />
      <MoreInfoIcon kind='arrowUp' $isSwiperEnable={isSwiperEnable} onClick={onInfoClick} />
    </Box>
  );
});
