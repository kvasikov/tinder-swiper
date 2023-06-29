import React from 'react';
import { Box } from './TweetStatus.styles';

export const TweetStatus = ({ profileData }) => {
  if (typeof profileData.isTweet !== 'boolean') {
    return null;
  }

  return (
    <Box $isSuccess={profileData.isTweet}>
      <span>{profileData.isTweet ? 'again' : 'nope'}</span>
    </Box>
  );
};
