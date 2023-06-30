import React from 'react';
import { PreviewMainInfo } from '../../common/PreviewMainInfo';
import { MoreInfo } from './MoreInfo';
import { Box } from './ProfileInfo.styles';

export const ProfileInfo = ({ profileData }) => {
  return (
    // TODO: 500px для тестирования
    <Box style={{ height: '500px' }}>
      <PreviewMainInfo color='black' profileData={profileData} />
      <MoreInfo profileData={profileData} />
    </Box>
  );
};
