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

  const { isSwiperEnable } = swiperStore;

  return (
    <Box>
      <Content>
        <LeftWrapper>
          <LeftContent profileData={profileData} />
        </LeftWrapper>
        <TweetButtonWrapper $isSwiperEnable={isSwiperEnable}>
          <TweetButton swiperState={swiper} />
        </TweetButtonWrapper>
        <RightWrapper>
          <RightContent />
        </RightWrapper>
      </Content>
    </Box>
  );
});
