import React from 'react';
import { TweetButton } from '../../common/TweetButton';
import { Box, Content, TweetButtonWrapper } from './InfoBlock.styles';

export const InfoBlock = () => {
  return (
    <Box>
      <Content>
        <div>InfoBlock</div>
        <TweetButtonWrapper>
          <TweetButton />
        </TweetButtonWrapper>
        <div>buttons</div>
      </Content>
    </Box>
  );
};
