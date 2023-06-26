import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { DATA_ATTR_PROFILE_ID } from '../../constants/attributes';
import { breakpoints } from '../../assets/breakpoints';
import { useMediaBreakpoint } from '../../hooks';
import { swiperStore } from './store';
import { ProfilePreview } from './ProfilePreview';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
import {
  Box,
  Wrapper,
  Container,
  Content,
  SwiperWrapper,
  SideWrapper,
  Slide,
} from './SwiperLayout.styles';
import { useGetOffsetTop } from './useGetOffsetTop.hook';
import { useGetProfileList } from './useGetProfileList.hook';

export const SwiperLayout = observer(() => {
  const {
    profileList,
    swiperInstance,
    isSwiperEnable,
    currentProfileDataId,
    currentProfileData,
    setSwiperInstance,
    setCurrentProfileId,
    setSwiperStatus,
  } = swiperStore;

  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const { wrapperRef } = useGetOffsetTop({ currentProfileDataId });

  const { fetchDataList } = useGetProfileList();

  useEffect(() => {
    if (isDesktop && !isSwiperEnable) {
      setSwiperStatus(true);
    }
  }, [isDesktop, isSwiperEnable, swiperInstance, setSwiperStatus]);

  const onSwiperInit = (swiper) => {
    swiper.on('observerUpdate', (innerSwiper) => {
      if (!swiperInstance) {
        setCurrentProfileId(innerSwiper);
        setSwiperInstance(innerSwiper);
      }
    });
  };

  const onSliderChange = (swiper) => {
    setCurrentProfileId(swiper);

    if (swiper.slides.length - swiper.activeIndex <= 2) {
      setTimeout(() => {
        fetchDataList();
      }, 1000);
    }
  };

  return (
    <Box>
      <Wrapper>
        <Container $isSwiperEnable={isSwiperEnable}>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <SwiperWrapper ref={wrapperRef}>
                <Swiper
                  direction='vertical'
                  style={{ height: '100%' }}
                  observer
                  autoHeight={false}
                  touchStartPreventDefault={false}
                  onAfterInit={onSwiperInit}
                  onSlideChange={onSliderChange}
                >
                  {profileList.map((profile) => {
                    const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

                    return (
                      <Slide
                        key={profile.id}
                        $isActive={profile.id === currentProfileDataId}
                        {...dataProps}
                      >
                        <ProfilePreview profileData={profile} />
                      </Slide>
                    );
                  })}
                </Swiper>
              </SwiperWrapper>
              <TweetButtonDesktop />
            </SideWrapper>
            <SideWrapper $isDesktop>
              <ProfileInfo profileData={currentProfileData} />
              <ButtonBlockDesktop />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
