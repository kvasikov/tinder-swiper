import React from 'react';
import { TweetButton } from '../../../common/TweetButton';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import { Box, Content, TweetButtonWrapper, LeftWrapper, RightWrapper } from './InfoBlock.styles';

export const InfoBlock = () => {
  return (
    <Box>
      <Content>
        <LeftWrapper>
          <LeftContent />
        </LeftWrapper>
        <TweetButtonWrapper>
          <TweetButton />
        </TweetButtonWrapper>
        <RightWrapper>
          <RightContent />
        </RightWrapper>
      </Content>
    </Box>
  );
};
