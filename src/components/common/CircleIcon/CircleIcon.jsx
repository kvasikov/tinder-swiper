import React from 'react';
import { CustomIcon } from '../CustomIcon';
import { Box } from './CircleIcon.styles';

export const CircleIcon = ({ kind, design = 'light', ...props }) => {
  return (
    <Box type='button' $design={design} {...props}>
      <CustomIcon kind={kind} />
    </Box>
  );
};
