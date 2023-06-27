import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { breakpoints } from '../../assets/breakpoints';
import { useMediaBreakpoint } from '../../hooks';
import { swiperStore } from './store';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
import { ProfileSwiper } from './ProfileSwiper';
import { Box, Wrapper, Container, Content, SideWrapper } from './SwiperLayout.styles';

export const SwiperLayout = observer(() => {
  const wasInitRef = useRef(false);

  const [swiperState, setSwiperState] = useState(null);

  const {
    isFetchingList,
    isSwiperEnable,
    currentProfileData,
    setCurrentProfileId,
    setSwiperStatus,
  } = swiperStore;

  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  useEffect(() => {
    if (isDesktop && !isSwiperEnable) {
      setSwiperStatus(true);
      swiperState.enable();
    }
  }, [isDesktop, isSwiperEnable, swiperState, setSwiperStatus]);

  useEffect(() => {
    if (!wasInitRef.current && swiperState?.mounted && !isFetchingList) {
      swiperState.on('observerUpdate', (_swiper) => {
        if (wasInitRef.current) {
          return;
        }
        setCurrentProfileId(_swiper.visibleSlides[_swiper.activeIndex]);
        wasInitRef.current = true;
      });
    }
  }, [swiperState, isFetchingList, setCurrentProfileId]);

  return (
    <Box>
      <Wrapper>
        <Container $isSwiperEnable={isSwiperEnable}>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <ProfileSwiper setSwiperState={setSwiperState} />
              <TweetButtonDesktop />
            </SideWrapper>
            <SideWrapper $isDesktop>
              <ProfileInfo profileData={currentProfileData} />
              <ButtonBlockDesktop swiperState={swiperState} />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
