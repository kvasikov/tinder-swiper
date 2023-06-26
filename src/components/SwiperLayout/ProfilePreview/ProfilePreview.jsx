import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../store';
import { PhotoBlock } from './PhotoBlock';
import { Box } from './ProfilePreview.styles';

export const ProfilePreview = observer(({ profileData }) => {
  const { isSwiperEnable } = swiperStore;

  return (
    <Box $isSwiperEnable={isSwiperEnable}>
      <PhotoBlock profileData={profileData} />
    </Box>
  );
});
