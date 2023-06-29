import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { Spin } from 'antd';
import { Swiper } from 'swiper/react';
import SwiperCore, { Virtual, Controller } from 'swiper';
import 'swiper/css';
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';
import { swiperStore, getProfileIdByDataAttr } from '../store';
import { ProfilePreview } from '../ProfilePreview';
import {
  SwiperWrapper,
  SpaceStyled,
  SwiperSlideStyled,
  LastLoaderWrapper,
} from './ProfileSwiper.styles';
import { useGetOffsetTop } from './useGetOffsetTop.hook';
import { useGetProfileList } from './useGetProfileList.hook';

SwiperCore.use([Virtual, Controller]);

export const ProfileSwiper = observer(({ setSwiperState }) => {
  const prevIndex = useRef(null);

  const {
    isFetchingList,
    profileList,
    currentProfileDataId,
    setCurrentProfileId,
    updateProfileData,
  } = swiperStore;
  const { fetchDataList } = useGetProfileList();
  const { wrapperRef } = useGetOffsetTop({ currentProfileDataId });

  const onSliderChange = (swiper) => {
    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    const actualIndex = swiper.visibleSlides.length > 1 ? swiper.visibleSlides.length - 1 : 0;
    const currentIndex = isPrev ? 0 : actualIndex;

    const profileId = getProfileIdByDataAttr(
      swiper?.visibleSlides?.[currentIndex],
      profileList?.[0].id,
    );

    setCurrentProfileId(profileId);
    prevIndex.current = swiper.activeIndex;

    const profileData = profileList.find((profile) => profile.id === currentProfileDataId);

    if (profileData?.isTweet === null && !isPrev) {
      setTimeout(() => {
        updateProfileData(profileData.id, { isTweet: false });
      }, 500);
    }

    if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      fetchDataList();
    }
  };

  return (
    <SwiperWrapper ref={wrapperRef}>
      <Swiper
        direction='vertical'
        style={{ height: '100%' }}
        observer
        virtual={{
          enabled: true,
          addSlidesAfter: 2,
          addSlidesBefore: 2,
        }}
        touchStartPreventDefault={false}
        onAfterInit={setSwiperState}
        onSlideChange={onSliderChange}
      >
        {isFetchingList && profileList.length === 0 && (
          <SwiperSlideStyled>
            <SpaceStyled direction='vertical'>
              <Spin tip='Loading' size='large'>
                <div />
              </Spin>
            </SpaceStyled>
          </SwiperSlideStyled>
        )}
        {profileList.map((profile, profileIndex) => {
          const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

          return (
            <SwiperSlideStyled key={profile.id} virtualIndex={profileIndex} {...dataProps}>
              <ProfilePreview profileData={profile} />
              {isFetchingList && profileIndex === profileList.length - 1 && (
                <LastLoaderWrapper>
                  <Spin size='default' />
                </LastLoaderWrapper>
              )}
            </SwiperSlideStyled>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
});
