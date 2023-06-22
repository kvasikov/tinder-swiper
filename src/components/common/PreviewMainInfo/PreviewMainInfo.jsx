import React from 'react';
import { Box } from './PreviewMainInfo.styles';

export const PreviewMainInfo = ({ color = 'white' }) => {
  return (
    <Box $color={color}>
      <div>PreviewMainInfo</div>
    </Box>
  );
};
