import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
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
} from './SwiperLayout.styles';
import { useGetOffsetTop } from './useGetOffsetTop.hook';
import { useGetProfileList } from './useGetProfileList.hook';

SwiperCore.use([Virtual]);

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
        setCurrentProfileId(innerSwiper.visibleSlides);
        setSwiperInstance(innerSwiper);
      }
    });
  };

  const onSliderChange = (swiper) => {
    setCurrentProfileId(swiper.visibleSlides);

    if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      setTimeout(() => {
        fetchDataList();
      }, 100);
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
                  virtual
                  touchStartPreventDefault={false}
                  onAfterInit={onSwiperInit}
                  onSlideChange={onSliderChange}
                >
                  {profileList.map((profile, profileIndex) => {
                    const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

                    return (
                      <SwiperSlide key={profile.id} virtualIndex={profileIndex} {...dataProps}>
                        <ProfilePreview profileData={profile} />
                      </SwiperSlide>
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
