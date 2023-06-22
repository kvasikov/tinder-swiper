import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProfilePreview } from '../ProfilePreview';
import { ProfileInfo } from '../ProfileInfo';
import { Box, Wrapper, Container, Content, SideWrapper } from './SwiperLayout.styles';
import { PROFILE_LIST } from '../../mock';

export const SwiperLayout = () => {
  return (
    <Box>
      <Wrapper>
        <Container>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <Swiper direction={'vertical'} autoHeight={false} style={{ height: '100%' }}>
                {PROFILE_LIST.map((profile) => (
                  <SwiperSlide key={profile.id}>
                    <ProfilePreview profileData={profile} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SideWrapper>
            <SideWrapper>
              <ProfileInfo />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
};
