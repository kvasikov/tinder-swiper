import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProfilePreview } from '../ProfilePreview';
import { ProfileInfo } from '../ProfileInfo';
import { ButtonBlockDesktop } from '../ButtonBlockDesktop';
import { TweetButtonDesktop } from '../TweetButtonDesktop';
import {
  Box,
  Wrapper,
  Container,
  Content,
  SwiperWrapper,
  SideWrapper,
} from './SwiperLayout.styles';
import { PROFILE_LIST } from '../../mock';

export const SwiperLayout = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <Box>
      <Wrapper>
        <Container>
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
                  {PROFILE_LIST.map((profile) => (
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
              <ButtonBlockDesktop swiperInstance={swiperInstance} />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
};
