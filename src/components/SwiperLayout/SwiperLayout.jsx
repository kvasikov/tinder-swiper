import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
} from './SwiperLayout.styles';
import { PROFILE_LIST } from '../../mock';

export const SwiperLayout = observer(() => {
  const { profileList, isSwiperEnable, setProfileList, setSwiperInstance } = swiperStore;

  // TODO: брать список с помощью API
  useEffect(() => {
    setProfileList(PROFILE_LIST);
  }, [setProfileList]);

  return (
    <Box>
      <Wrapper>
        <Container $isSwiperEnable={isSwiperEnable}>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <SwiperWrapper>
                <Swiper
                  direction={'vertical'}
                  autoHeight={false}
                  style={{ height: '100%' }}
                  onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                  }}
                >
                  {profileList.map((profile) => (
                    <SwiperSlide key={profile.id}>
                      <ProfilePreview profileData={profile} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperWrapper>
              <TweetButtonDesktop />
            </SideWrapper>
            <SideWrapper>
              <ProfileInfo />
              <ButtonBlockDesktop />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
