import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { DATA_ATTR_PROFILE_ID } from '../../constants/attributes';
import { swiperStore } from '../../store';
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
  Slide,
} from './SwiperLayout.styles';
import { PROFILE_LIST } from '../../mock';

export const SwiperLayout = observer(() => {
  const {
    profileList,
    swiperInstance,
    isSwiperEnable,
    currentProfileDataId,
    currentProfileData,
    setProfileList,
    setSwiperInstance,
    setCurrentProfileId,
  } = swiperStore;

  // TODO: брать список с помощью API
  useEffect(() => {
    setProfileList(PROFILE_LIST);
  }, [setProfileList]);

  const onSwiperInit = (swiper) => {
    swiper.on('observerUpdate', (innerSwiper) => {
      if (!swiperInstance) {
        setCurrentProfileId(innerSwiper);
        setSwiperInstance(innerSwiper);
      }
    });
  };

  const onSliderChange = (swiper) => {
    setCurrentProfileId(swiper);
  };

  return (
    <Box>
      <Wrapper>
        <Container $isSwiperEnable={isSwiperEnable}>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <SwiperWrapper>
                <Swiper
                  direction='vertical'
                  observer
                  onAfterInit={onSwiperInit}
                  autoHeight={false}
                  style={{ height: '100%' }}
                  onSlideChange={onSliderChange}
                >
                  {profileList.map((profile) => {
                    const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

                    return (
                      <Slide
                        key={profile.id}
                        $isActive={profile.id === currentProfileDataId}
                        {...dataProps}
                      >
                        <ProfilePreview profileData={profile} />
                      </Slide>
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
