import React from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { breakpoints } from '../../../../../assets/breakpoints';
import { useMediaBreakpoint } from '../../../../../hooks';
import { swiperStore } from '../../../store';
import { SuperLikeBlock } from './SuperLikeBlock';
import { Box, MoreInfoIcon } from './RightContent.styles';

export const RightContent = observer(() => {
  const swiper = useSwiper();
  const { isSwiperEnable, setSwiperStatus } = swiperStore;
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const onInfoClick = () => {
    if (isSwiperEnable) {
      setSwiperStatus(false);
      !isDesktop && swiper.disable();
    } else {
      setSwiperStatus(true);
      !isDesktop && swiper.enable();
    }
  };

  return (
    <Box>
      <SuperLikeBlock />
      <MoreInfoIcon kind='arrowUp' $isSwiperEnable={isSwiperEnable} onClick={onInfoClick} />
    </Box>
  );
});
