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
  const { isShowMoreProfileInfo, setMoreInfoStatus } = swiperStore;
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const onInfoClick = () => {
    if (isShowMoreProfileInfo) {
      setMoreInfoStatus(false);
      !isDesktop && swiper.disable();
    } else {
      setMoreInfoStatus(true);
      !isDesktop && swiper.enable();
    }
  };

  return (
    <Box>
      <SuperLikeBlock />
      <MoreInfoIcon
        kind='arrowUp'
        $isShowMoreProfileInfo={isShowMoreProfileInfo}
        onClick={onInfoClick}
      />
    </Box>
  );
});
