import React from 'react';
import { useSwiper } from 'swiper/react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { TweetButton } from '../../../common/TweetButton';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import { Box, Content, TweetButtonWrapper, LeftWrapper, RightWrapper } from './InfoBlock.styles';

export const InfoBlock = observer(({ profileData }) => {
  const swiper = useSwiper();

  const { isShowMoreProfileInfo } = swiperStore;

  return (
    <Box>
      <Content>
        <LeftWrapper>
          <LeftContent profileData={profileData} />
        </LeftWrapper>
        <TweetButtonWrapper $isShowMoreProfileInfo={isShowMoreProfileInfo}>
          <TweetButton swiperState={swiper} />
        </TweetButtonWrapper>
        <RightWrapper>
          <RightContent />
        </RightWrapper>
      </Content>
    </Box>
  );
});
