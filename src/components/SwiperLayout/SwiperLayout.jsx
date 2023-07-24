import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Spin } from 'antd';
import { swiperStore, getProfileIdByDataAttr } from './store';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
// import { LocationBlock } from './LocationBlock';
import { ProfileSwiper } from './ProfileSwiper';
import { Header } from './Header';
import styles from './SwiperLayout.module.scss';

export const SwiperLayout = observer(() => {
  const wasInitRef = useRef(false);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 500);
  }, []);

  const [swiperState, setSwiperState] = useState(null);

  useEffect(() => {
    if (!wasInitRef.current && swiperState?.mounted && !swiperStore.isFetchingList) {
      swiperState.on('observerUpdate', (_swiper) => {
        if (wasInitRef.current) {
          return;
        }

        const profileId = getProfileIdByDataAttr(
          _swiper.visibleSlides[_swiper.activeIndex],
          swiperStore.profileList?.[0].id,
        );

        swiperStore.setCurrentProfileId(profileId);
        wasInitRef.current = true;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperStore.isFetchingList, swiperStore.profileList, swiperStore.setCurrentProfileId]);

  return (
    <>
      <Header />
      <main className={styles.box}>
        <div className={styles.wrapper}>
          <div
            className={cn(styles.container, 'scrollbar', {
              [styles['container--no-scroll']]: !swiperStore.isHideMoreProfileInfo,
            })}
          >
            <div className={styles.content}>
              <div
                className={cn(styles['side-wrapper'], styles['side-wrapper--full'], 'scrollbar', {
                  [styles['side-wrapper--hide']]: swiperStore.isHideMoreProfileInfo,
                })}
              >
                {!isInit && (
                  <div className={styles.loader}>
                    <Spin />
                  </div>
                )}
                {/* {swiperStore.activeTabValue === 'geo' && <LocationBlock />} */}
                <ProfileSwiper swiperState={swiperState} setSwiperState={setSwiperState} />
                {isInit && <TweetButtonDesktop swiperState={swiperState} />}
              </div>
              <div
                className={cn(styles['side-wrapper'], styles['side-wrapper_desktop'], 'scrollbar', {
                  [styles['side-wrapper_desktop--hide']]: swiperStore.isHideMoreProfileInfo,
                })}
              >
                <ProfileInfo
                  swiperState={swiperState}
                  profileData={swiperStore.currentProfileData}
                />
              </div>
              <div
                className={cn(styles['button-wrapper'], {
                  [styles['button-wrapper--hide']]: swiperStore.isHideMoreProfileInfo,
                })}
              >
                {isInit && (
                  <ButtonBlockDesktop
                    profileData={swiperStore.currentProfileData}
                    swiperState={swiperState}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
