import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { breakpoints } from '../../assets/breakpoints';
import { useMediaBreakpoint } from '../../hooks';
import { swiperStore, getProfileIdByDataAttr } from './store';
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
    profileList,
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

        const profileId = getProfileIdByDataAttr(
          _swiper.visibleSlides[_swiper.activeIndex],
          profileList?.[0].id,
        );

        setCurrentProfileId(profileId);
        wasInitRef.current = true;
      });
    }
  }, [swiperState, profileList, isFetchingList, setCurrentProfileId]);

  return (
    <Box>
      <Wrapper>
        <Container $isSwiperEnable={isSwiperEnable}>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <ProfileSwiper swiperState={swiperState} setSwiperState={setSwiperState} />
              <TweetButtonDesktop swiperState={swiperState} />
            </SideWrapper>
            <SideWrapper $isDesktop>
              <ProfileInfo profileData={currentProfileData} />
              <ButtonBlockDesktop profileData={currentProfileData} swiperState={swiperState} />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
