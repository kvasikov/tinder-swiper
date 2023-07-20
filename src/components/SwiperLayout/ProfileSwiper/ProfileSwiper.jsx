import React, { useRef } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Spin, Space } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Controller } from 'swiper';
import 'swiper/css';
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';
import { swiperStore, getProfileIdByDataAttr } from '../store';
import { ProfilePreview } from '../ProfilePreview';
import { TopBlock } from './TopBlock';
import { BottomBlock } from './BottomBlock';
import { GeoBlock } from './GeoBlock';
import styles from './ProfileSwiper.module.scss';
import { useGetProfileList } from './useGetProfileList.hook';
import { useWheelSwipe } from './useWheelSwipe.hook';

SwiperCore.use([Virtual, Controller]);

export const ProfileSwiper = observer(({ swiperState, setSwiperState }) => {
  const prevIndex = useRef(null);
  const wrapperRef = useRef(null);

  const { fetchDataList } = useGetProfileList();

  const onSliderChange = (swiper) => {
    const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    const actualIndex = swiper.visibleSlides.length > 1 ? swiper.visibleSlides.length - 1 : 0;
    const currentIndex = isPrev ? 0 : actualIndex;

    const profileId = getProfileIdByDataAttr(
      swiper?.visibleSlides?.[currentIndex],
      swiperStore.profileList?.[0].id,
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

    if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      fetchDataList();
    }
  };

  useWheelSwipe({ swiperState, wrapperEl: wrapperRef.current });

  return (
    <div className={styles.box}>
      <TopBlock />
      <div className={styles.wrapper}>
        {swiperStore.activeTabValue === 'geo' && <GeoBlock />}
        {swiperStore.activeTabValue === 'profile' && (
          <div className={styles.content} ref={wrapperRef}>
            <Swiper
              className={styles.swiper}
              direction='vertical'
              observer
              speed={400}
              simulateTouch={false}
              spaceBetween={48}
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
            </Swiper>
          </div>
        )}
      </div>
      <BottomBlock />
    </div>
  );
});
