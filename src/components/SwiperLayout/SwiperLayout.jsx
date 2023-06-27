import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { Spin } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Controller } from 'swiper';
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
  SpaceStyled,
} from './SwiperLayout.styles';
import { useGetOffsetTop } from './useGetOffsetTop.hook';
import { useGetProfileList } from './useGetProfileList.hook';

SwiperCore.use([Virtual, Controller]);

export const SwiperLayout = observer(() => {
  const prevIndex = useRef(null);
  const wasInitRef = useRef(false);

  const [swiperState, setSwiperState] = useState(null);

  const {
    isFetchingList,
    profileList,
    isSwiperEnable,
    currentProfileDataId,
    currentProfileData,
    setCurrentProfileId,
    setSwiperStatus,
  } = swiperStore;

  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const { wrapperRef } = useGetOffsetTop({ currentProfileDataId });

  const { fetchDataList } = useGetProfileList();

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

  const onSliderChange = (swiper) => {
    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    // TODO: убрать тернарник внутри тернарника
    const currentIndex = isPrev
      ? 0
      : swiper.visibleSlides.length > 1
      ? swiper.visibleSlides.length - 1
      : 0;

    setCurrentProfileId(swiper?.visibleSlides?.[currentIndex]);
    prevIndex.current = swiper.activeIndex;

    if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      fetchDataList();
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
                  onAfterInit={setSwiperState}
                  onSlideChange={onSliderChange}
                >
                  {isFetchingList && profileList.length === 0 && (
                    <SwiperSlide>
                      <SpaceStyled direction='vertical'>
                        <Spin tip='Loading' size='large'>
                          <div />
                        </Spin>
                      </SpaceStyled>
                    </SwiperSlide>
                  )}
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
              <ButtonBlockDesktop swiperState={swiperState} />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
