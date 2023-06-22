import React from 'react';
import { PreviewMainInfo } from '../../common/PreviewMainInfo';
import { Box } from './ProfileInfo.styles';

export const ProfileInfo = () => {
  return (
    <Box style={{ height: '500px' }}>
      <PreviewMainInfo color='black' />
    </Box>
  );
};
