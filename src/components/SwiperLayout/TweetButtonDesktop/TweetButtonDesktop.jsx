import React from 'react';
import { TweetButton } from '../TweetButton';
import { Box } from './TweetButtonDesktop.styles';

export const TweetButtonDesktop = ({ swiperState }) => {
  return (
    <Box>
      <TweetButton swiperState={swiperState} />
    </Box>
  );
};
