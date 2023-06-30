import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { swiperStore, getProfileIdByDataAttr } from './store';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
import { ProfileSwiper } from './ProfileSwiper';
import {
  Box,
  Wrapper,
  Container,
  Content,
  SideWrapper,
  ButtonWrapper,
} from './SwiperLayout.styles';

export const SwiperLayout = observer(() => {
  const wasInitRef = useRef(false);

  const [swiperState, setSwiperState] = useState(null);

  const {
    isFetchingList,
    profileList,
    isShowMoreProfileInfo,
    currentProfileData,
    setCurrentProfileId,
  } = swiperStore;

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
        <Container $isShowMoreProfileInfo={isShowMoreProfileInfo}>
          <Content>
            <SideWrapper $isFullHeightMobile $isShowMoreProfileInfo={isShowMoreProfileInfo}>
              <ProfileSwiper swiperState={swiperState} setSwiperState={setSwiperState} />
              <TweetButtonDesktop swiperState={swiperState} />
            </SideWrapper>
            <SideWrapper $isDesktopInfo $isShowMoreProfileInfo={isShowMoreProfileInfo}>
              <ProfileInfo swiperState={swiperState} profileData={currentProfileData} />
            </SideWrapper>
            <ButtonWrapper $isShowMoreProfileInfo={isShowMoreProfileInfo}>
              <ButtonBlockDesktop profileData={currentProfileData} swiperState={swiperState} />
            </ButtonWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
