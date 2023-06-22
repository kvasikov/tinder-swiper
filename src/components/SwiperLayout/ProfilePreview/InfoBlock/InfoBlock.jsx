import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../../store';
import { TweetButton } from '../../../common/TweetButton';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import { Box, Content, TweetButtonWrapper, LeftWrapper, RightWrapper } from './InfoBlock.styles';

export const InfoBlock = observer(() => {
  const { isSwiperEnable } = swiperStore;

  return (
    <Box>
      <Content>
        <LeftWrapper>
          <LeftContent />
        </LeftWrapper>
        <TweetButtonWrapper $isSwiperEnable={isSwiperEnable}>
          <TweetButton />
        </TweetButtonWrapper>
        <RightWrapper>
          <RightContent />
        </RightWrapper>
      </Content>
    </Box>
  );
});
