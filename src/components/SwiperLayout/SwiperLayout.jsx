import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Spin, Space } from 'antd';
import { useIsDesktop } from '../../hooks';
import { swiperStore, getProfileIdByDataAttr } from './store';
import { ProfileInfo } from './ProfileInfo';
import { ButtonBlockDesktop } from './ButtonBlockDesktop';
import { TweetButtonDesktop } from './TweetButtonDesktop';
// import { LocationBlock } from './LocationBlock';
import { ProfileSwiper } from './ProfileSwiper';
import { Header } from './Header';
import styles from './SwiperLayout.module.scss';

export const SwiperLayout = observer(() => {
  const isDesktop = useIsDesktop();

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
          _swiper?.visibleSlides?.[_swiper.activeIndex],
          swiperStore.profileList?.[0].id,
        );

        swiperStore.setCurrentProfileId(profileId);
        wasInitRef.current = true;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperStore.isFetchingList, swiperStore.profileList, swiperStore.setCurrentProfileId]);

  const isHideMoreInfo =
    typeof swiperStore.currentProfileData.isHideMoreProfileInfo === 'boolean'
      ? swiperStore.currentProfileData.isHideMoreProfileInfo
      : true;

  return (
    <>
      <Header />
      <main className={styles.box}>
        <div className={styles.wrapper}>
          <div
            className={cn(styles.container, 'scrollbar', {
              [styles['container--no-scroll']]: !isHideMoreInfo,
            })}
          >
            <div className={styles.content}>
              <div
                className={cn(styles['side-wrapper'], styles['side-wrapper--full'], 'scrollbar', {
                  [styles['side-wrapper--hide']]: isHideMoreInfo,
                })}
              >
                {swiperStore.isFetchingList && swiperStore.profileList.length === 0 && (
                  <Space className={styles.space} direction='vertical'>
                    <Spin tip='Loading' size='large'>
                      <div />
                    </Spin>
                  </Space>
                )}
                {/* {swiperStore.activeTabValue === 'geo' && <LocationBlock />} */}
                <ProfileSwiper swiperState={swiperState} setSwiperState={setSwiperState} />
                {isInit && <TweetButtonDesktop swiperState={swiperState} />}
              </div>
              {isDesktop && (
                <>
                  <div
                    className={cn(
                      styles['side-wrapper'],
                      styles['side-wrapper_desktop'],
                      'scrollbar',
                      {
                        [styles['side-wrapper_desktop--hide']]: isHideMoreInfo,
                      },
                    )}
                  >
                    <ProfileInfo
                      swiperState={swiperState}
                      profileData={swiperStore.currentProfileData}
                    />
                  </div>
                  <div
                    className={cn(styles['button-wrapper'], {
                      [styles['button-wrapper--hide']]:
                        swiperStore.currentProfileData.isHideMoreProfileInfo,
                    })}
                  >
                    {isInit && (
                      <ButtonBlockDesktop
                        profileData={swiperStore.currentProfileData}
                        swiperState={swiperState}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
