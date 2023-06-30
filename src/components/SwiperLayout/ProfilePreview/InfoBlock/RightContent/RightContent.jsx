import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { setScrollToTopProfile } from '../../../utils';
import { breakpoints } from '../../../../../assets/breakpoints';
import { useMediaBreakpoint } from '../../../../../hooks';
import { swiperStore } from '../../../store';
import { SuperLikeBlock } from './SuperLikeBlock';
import { Box, MoreInfoIcon } from './RightContent.styles';

export const RightContent = observer(() => {
  const contentRef = useRef(null);

  const swiper = useSwiper();
  const { isShowMoreProfileInfo, setMoreInfoStatus } = swiperStore;
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const onInfoClick = () => {
    const execHideMoreInfo = () => {
      setMoreInfoStatus(true);
      !isDesktop && swiper.enable();
    };

    if (isShowMoreProfileInfo) {
      setMoreInfoStatus(false);
      !isDesktop && swiper.disable();
    } else {
      setScrollToTopProfile(contentRef.current, execHideMoreInfo);
    }
  };

  return (
    <Box ref={contentRef}>
      <SuperLikeBlock />
      <MoreInfoIcon
        kind='arrowUp'
        $isShowMoreProfileInfo={isShowMoreProfileInfo}
        onClick={onInfoClick}
      />
    </Box>
  );
});
