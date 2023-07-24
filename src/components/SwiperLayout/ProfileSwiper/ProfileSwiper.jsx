import React, { useRef, useEffect, useCallback } from 'react';
import { toJS } from 'mobx';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { Spin, Space } from 'antd';
import { Virtual, Controller } from 'swiper/modules';
import { Swiper } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/virtual';
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';
import { useDelayEffect, useIsDesktop } from '../../../hooks';
import { swiperStore, getProfileIdByDataAttr } from '../store';
import { ProfilePreview } from '../ProfilePreview';
import { TopBlock } from './TopBlock';
import { BottomBlock } from './BottomBlock';
import styles from './ProfileSwiper.module.scss';
import { useGetOffsetTop } from './useGetOffsetTop.hook';
import { useGetProfileList } from './useGetProfileList.hook';
import { useWheelSwipe } from './useWheelSwipe.hook';

// SwiperCore.use([Virtual, Controller]);

export const ProfileSwiper = observer(({ swiperState, setSwiperState }) => {
  const swiperElRef = useRef(null);
  const wasInitRef = useRef(false);

  const isDesktop = useIsDesktop();
  const [isActive] = useDelayEffect({ dependencyFlag: !swiperStore.isHideMoreProfileInfo });

  const prevIndex = useRef(null);

  const { fetchDataList } = useGetProfileList();
  const { wrapperRef } = useGetOffsetTop({
    currentProfileDataId: swiperStore.currentProfileDataId,
  });

  const onSliderChange = useCallback(
    (swiper) => {
      console.log('onSliderChange');

      const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

      const isPrev =
        prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

      const actualIndex = swiper.visibleSlides.length > 1 ? swiper.visibleSlides.length - 1 : 0;
      const currentIndex = isPrev ? 0 : actualIndex;

      const profileId = getProfileIdByDataAttr(
        swiper?.visibleSlides?.[currentIndex],
        swiperStore.profileList?.[0].id,
      );

      console.log({ visibleSlides: swiper.visibleSlides })

      swiperStore.setCurrentProfileId(profileId);
      prevIndex.current = swiper.activeIndex;

      const profileData = swiperStore.profileList.find(
        (profile) => profile.id === swiperStore.currentProfileDataId,
      );

      // if (profileData?.isTweet === null && !isPrev) {
      //   setTimeout(() => {
      //     swiperStore.updateProfileData(prevProfileDataId, { isTweet: false });
      //   }, 500);
      // }

      // if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      //   fetchDataList();
      // }
    },
    [fetchDataList],
  );

  useWheelSwipe({
    swiperState,
    wrapperEl: wrapperRef.current,
    activeTabValue: swiperStore.activeTabValue,
    isHideMoreProfileInfo: swiperStore.isHideMoreProfileInfo,
  });

  useEffect(() => {
    if (!swiperElRef.current || wasInitRef.current) {
      return;
    }

    wasInitRef.current = true;

    const swiper = new Swiper(swiperElRef.current, {
      modules: [Virtual, Controller],
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 1,
      // observer: true,
      simulateTouch: false,
      touchStartPreventDefault: false,
      direction: 'vertical',
      virtual: {
        enabled: true,
        addSlidesAfter: 2,
        addSlidesBefore: 2,
        // slides: [],
        // slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 7', 'Slide 8']
      },
      on: {
        afterInit: setSwiperState,
        slideChange: onSliderChange,
      },
    });
  }, [onSliderChange, setSwiperState]);

  return (
    <div className={styles.box}>
      <TopBlock />
      <div
        className={cn(styles.wrapper, {
          [styles['wrapper--active']]: !isDesktop && isActive,
        })}
        ref={wrapperRef}
      >
        <div className='swiper' ref={swiperElRef} style={{ height: '100%' }}>
          <div className='swiper-wrapper'>
            {/* {swiperStore.isFetchingList && swiperStore.profileList.length === 0 && (
              <div className={cn(styles.slide, 'swiper-slide')}>
                <Space className={styles.space} direction='vertical'>
                  <Spin tip='Loading' size='large'>
                    <div />
                  </Spin>
                </Space>
              </div>
            )} */}
            {swiperStore.profileList.map((profile, profileIndex) => {
              const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

              return (
                <div
                  className='swiper-slide'
                  key={profile.id}
                  // virtualIndex={profileIndex}
                  {...dataProps}
                >
                  <ProfilePreview profileData={profile} />
                  {swiperStore.isFetchingList &&
                    profileIndex === swiperStore.profileList.length - 1 && (
                      <div className={styles['last-loader-wrapper']}>
                        <Spin size='default' />
                      </div>
                    )}
                </div>
              );
            })}
            {/* <div className='swiper-slide'>Slide 11</div>
            <div className='swiper-slide'>Slide 22</div>
            <div className='swiper-slide'>Slide 33</div> */}
          </div>
        </div>
        {/* <Swiper
          direction='vertical'
          style={{ height: '100%' }}
          observer
          // mousewheel={true}
          // speed={400}
          // effect='creative'
          // creativeEffect={{
          //   limitProgress: 1,
          //   // progressMultiplier: 2,
          //   // perspective: false,
          //   prev: {
          //     // limitProgress: 1,
          //     // shadow: true,
          //     translate: [0, '-105%', -1],
          //     scale: 0.75,
          //     origin: 'top',
          //   },
          //   next: {
          //     // limitProgress: 1,
          //     translate: [0, '105%', 0],
          //     scale: 0.75,
          //     origin: 'bottom',
          //   },
          // }}
          // modules={[EffectFade]}
          spaceBetween={16}
          simulateTouch={false}
          virtual={{
            enabled: true,
            addSlidesAfter: 2,
            addSlidesBefore: 2,
          }}
          touchStartPreventDefault={false}
          onAfterInit={setSwiperState}
          onSlideChange={onSliderChange}
        >
          {swiperStore.isFetchingList && swiperStore.profileList.length === 0 && (
            <SwiperSlide className={styles.slide}>
              <Space className={styles.space} direction='vertical'>
                <Spin tip='Loading' size='large'>
                  <div />
                </Spin>
              </Space>
            </SwiperSlide>
          )}
          {swiperStore.profileList.map((profile, profileIndex) => {
            const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

            return (
              <SwiperSlide
                className={styles.slide}
                key={profile.id}
                virtualIndex={profileIndex}
                {...dataProps}
              >
                <ProfilePreview profileData={profile} />
                {swiperStore.isFetchingList &&
                  profileIndex === swiperStore.profileList.length - 1 && (
                    <div className={styles['last-loader-wrapper']}>
                      <Spin size='default' />
                    </div>
                  )}
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
      <BottomBlock />
    </div>
  );
});
