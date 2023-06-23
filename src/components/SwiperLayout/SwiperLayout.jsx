import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
} from './SwiperLayout.styles';
import { PROFILE_LIST } from '../../mock';

export const SwiperLayout = observer(() => {
  const { profileList, isSwiperEnable, setProfileList, setSwiperInstance, setCurrentProfileId } =
    swiperStore;

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
                  direction='vertical'
                  onAfterInit={(swiper) => {
                    setTimeout(() => {
                      if (!swiper.slides) {
                        return;
                      }
                      setCurrentProfileId(swiper);
                      setSwiperInstance(swiper);
                    });
                  }}
                  autoHeight={false}
                  style={{ height: '100%' }}
                  onSlideChange={(swiper) => {
                    setCurrentProfileId(swiper);
                  }}
                >
                  {profileList.map((profile) => {
                    const dataProps = { [DATA_ATTR_PROFILE_ID]: profile.id };

                    return (
                      <SwiperSlide key={profile.id} {...dataProps}>
                        <ProfilePreview profileData={profile} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </SwiperWrapper>
              <TweetButtonDesktop />
            </SideWrapper>
            <SideWrapper $isDesktop>
              <ProfileInfo />
              <ButtonBlockDesktop />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
});
