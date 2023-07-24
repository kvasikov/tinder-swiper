import React, { useRef } from 'react';
import { toJS } from 'mobx';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { Spin, Space } from 'antd';
import SwiperCore, { Virtual, EffectCreative, Manipulation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import 'swiper/css/virtual';
import 'swiper/css/manipulation';
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

SwiperCore.use([Virtual, EffectCreative, Manipulation]);

export const ProfileSwiper = observer(({ swiperState, setSwiperState }) => {
  const isDesktop = useIsDesktop();
  const [isActive] = useDelayEffect({ dependencyFlag: !swiperStore.isHideMoreProfileInfo });

  const prevIndex = useRef(null);

  const { fetchDataList } = useGetProfileList();
  const { wrapperRef } = useGetOffsetTop({
    currentProfileDataId: swiperStore.currentProfileDataId,
  });

  const onSliderChange = async (swiper) => {
    const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    const actualIndex = swiper?.visibleSlides?.length > 1 ? swiper?.visibleSlides?.length - 1 : 0;
    const currentIndex = isPrev ? 0 : actualIndex;

    // TODO
    const profileId = getProfileIdByDataAttr(
      swiper?.visibleSlides?.[currentIndex],
      swiperStore.profileList?.[0]?.id,
    );

    swiperStore.setCurrentProfileId(profileId);
    prevIndex.current = swiper.activeIndex;

    const profileData = swiperStore.profileList.find(
      (profile) => profile.id === swiperStore.currentProfileDataId,
    );

    if (profileData?.isTweet === null && !isPrev) {
      setTimeout(() => {
        swiperStore.updateProfileData(prevProfileDataId, { isTweet: false });
      }, 500);
    }

    // if (swiper.slides.length - swiper.activeIndex <= 1) {
    //   console.log(swiper.slides.length, swiper.activeIndex);
    //   // fetchDataList();
    //   // fetchDataList();
    // }
  };

  useWheelSwipe({
    swiperState,
    wrapperEl: wrapperRef.current,
    activeTabValue: swiperStore.activeTabValue,
    isHideMoreProfileInfo: swiperStore.isHideMoreProfileInfo,
  });

  return (
    <div className={styles.box}>
      <TopBlock />
      <div
        className={cn(styles.wrapper, {
          [styles['wrapper--active']]: !isDesktop && isActive,
        })}
        ref={wrapperRef}
      >
        <Swiper
          direction='vertical'
          style={{ height: '100%' }}
          observer
          effect='creative'
          creativeEffect={{
            limitProgress: 1,
            prev: {
              translate: [0, '-95%', 0],
              scale: 0.75,
            },
            next: {
              translate: [0, '95%', 0],
              scale: 0.75,
            },
          }}
          spaceBetween={0}
          simulateTouch={false}
          touchStartPreventDefault={false}
          onAfterInit={setSwiperState}
          onSlideChange={onSliderChange}
          onProgress={(_, progress) => {
            if (progress >= 0.9) {
              fetchDataList();
            }
          }}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <BottomBlock />
    </div>
  );
});
