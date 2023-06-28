import React from 'react';
import { CustomIcon } from '../CustomIcon';
import { Box } from './CircleIcon.styles';

export const CircleIcon = ({ kind, design = 'light', onClick, ...props }) => {
  return (
    <Box type='button' $design={design} onClick={onClick} {...props}>
      <CustomIcon kind={kind} />
    </Box>
  );
};
