import React from 'react';
import { PhotoBlock } from './PhotoBlock';
import { Box } from './ProfilePreview.styles';

export const ProfilePreview = ({ profileData }) => {
  return (
    <Box>
      <PhotoBlock profileData={profileData} />
    </Box>
  );
};
