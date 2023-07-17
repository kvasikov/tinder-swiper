import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { swiperStore, getProfileIdByDataAttr } from './store';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
import { ProfileSwiper } from './ProfileSwiper';
import styles from './SwiperLayout.module.scss';

export const SwiperLayout = observer(() => {
  const wasInitRef = useRef(false);

  const [swiperState, setSwiperState] = useState(null);

  const {
    isFetchingList,
    profileList,
    isHideMoreProfileInfo,
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
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div
          className={cn(styles.container, {
            [styles['container--no-scroll']]: isHideMoreProfileInfo,
          })}
        >
          <div className={styles.content}>
            <div
              className={cn(styles['side-wrapper'], styles['side-wrapper--full'], {
                [styles['side-wrapper--hide']]: isHideMoreProfileInfo,
              })}
            >
              <ProfileSwiper swiperState={swiperState} setSwiperState={setSwiperState} />
              <TweetButtonDesktop swiperState={swiperState} />
            </div>
            <div
              className={cn(styles['side-wrapper'], styles['side-wrapper_desktop'], {
                [styles['side-wrapper_desktop--hide']]: isHideMoreProfileInfo,
              })}
            >
              <ProfileInfo swiperState={swiperState} profileData={currentProfileData} />
            </div>
            <div
              className={cn(styles['button-wrapper'], {
                [styles['button-wrapper--hide']]: isHideMoreProfileInfo,
              })}
            >
              <ButtonBlockDesktop profileData={currentProfileData} swiperState={swiperState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
