import React, { useRef } from 'react';
import { toJS } from 'mobx';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { Spin } from 'antd';
import SwiperCore, { Virtual, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

SwiperCore.use([Virtual, EffectCreative]);

// TODO: использовать только для разработки
// В идеале нужно использовать виртуализацию, но используя при динамическом кол-ве слайдов
// Анимация свайпа начинает ввести себя крайне непредсказуемо
const IS_VIRTUAL = false;

export const ProfileSwiper = observer(() => {
  const isDesktop = useIsDesktop();
  const [isActive] = useDelayEffect({
    dependencyFlag: !swiperStore.currentProfileData.isHideMoreProfileInfo,
  });

  const prevIndex = useRef(null);

  const { fetchDataList } = useGetProfileList();
  const { wrapperRef } = useGetOffsetTop({
    currentProfileDataId: swiperStore.currentProfileDataId,
  });

  const onSliderChangeActual = (swiper) => {
    const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    const profileId = getProfileIdByDataAttr(
      swiper.slides[swiper.activeIndex],
      swiperStore.profileList[0].id,
    );

    swiperStore.setCurrentProfileId(profileId);
    prevIndex.current = swiper.activeIndex;

    const profileData = swiperStore.profileList.find((profile) => profile.id === prevProfileDataId);

    if (profileData?.isTweet === null && !isPrev) {
      setTimeout(() => {
        swiperStore.updateProfileData(prevProfileDataId, { isTweet: false });
      }, 500);
    }

    if (swiper.slides.length - 1 === swiper.activeIndex) {
      setTimeout(() => {
        fetchDataList();
      }, 250);
    }
  };

  const onSliderChangeVirtual = (swiper) => {
    const prevProfileDataId = toJS(swiperStore.currentProfileData.id);

    const isPrev =
      prevIndex.current - swiper.activeIndex === 1 || prevIndex.current === swiper.activeIndex;

    const actualIndex = swiper?.visibleSlides?.length > 1 ? swiper?.visibleSlides?.length - 1 : 0;
    const currentIndex = isPrev ? 0 : actualIndex;

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

    if (swiper.virtual.slides.length - swiper.realIndex <= 1) {
      fetchDataList();
    }
  };

  useWheelSwipe({
    swiperState: swiperStore.swiper,
    wrapperEl: wrapperRef.current,
    activeTabValue: swiperStore.activeTabValue,
    isHideMoreProfileInfo: swiperStore.currentProfileData.isHideMoreProfileInfo,
  });

  const onAfterInit = (swiper) => {
    swiperStore.setSwiperInstance(swiper);
  };

  const virtualOptions = IS_VIRTUAL
    ? {
        virtual: {
          enabled: true,
          addSlidesAfter: 2,
          addSlidesBefore: 2,
        },
      }
    : {};

  return (
    <div className={styles.box}>
      {Object.keys(swiperStore.currentProfileData).length !== 0 && (
        <div
          id='info'
          className={cn(styles.portal, {
            [styles['portal--active']]: !swiperStore.currentProfileData.isHideMoreProfileInfo,
          })}
        >
          <ProfilePreview profileData={swiperStore.currentProfileData} />
        </div>
      )}
      <TopBlock />
      <div
        className={cn(styles.wrapper, {
          [styles['wrapper--active']]: !isDesktop && isActive,
        })}
        ref={wrapperRef}
      >
        <Swiper
          {...virtualOptions}
          // modules={[EffectCreative]}
          direction='vertical'
          style={{ height: '100%' }}
          observer
          speed={250}
          // effect='creative'
          // creativeEffect={{
          //   limitProgress: 2,
          //   // progressMultiplier: 2,
          //   // perspective: false,
          //   prev: {
          //     // limitProgress: 1,
          //     // shadow: true,
          //     translate: [0, '-80%', -1],
          //     scale: 0.75,
          //     origin: 'top',
          //   },
          //   next: {
          //     // limitProgress: 1,
          //     translate: [0, '80%', 0],
          //     scale: 0.75,
          //     origin: 'bottom',
          //   },
          // }}
          // spaceBetween={0}
          spaceBetween={16}
          simulateTouch={false}
          // virtual={{
          //   enabled: true,
          //   addSlidesAfter: 20,
          //   addSlidesBefore: 20,
          // }}
          touchStartPreventDefault={false}
          onAfterInit={onAfterInit}
          onSlideChange={IS_VIRTUAL ? onSliderChangeVirtual : onSliderChangeActual}
        >
          {swiperStore.profileList.map((profile, profileIndex) => {
            const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

            return (
              <SwiperSlide
                // className={styles.slide}
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
