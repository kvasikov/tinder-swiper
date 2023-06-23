import React from 'react';
import { CustomIcon } from '../CustomIcon';
import { Box, Button } from './TweetButton.styles';

export const TweetButton = () => {
  return (
    <Box>
      <CustomIcon kind='tweet' />
      <Button>Tweet</Button>
    </Box>
  );
};
