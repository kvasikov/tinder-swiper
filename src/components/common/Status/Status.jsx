import React from 'react';
import { Box, IconStyled } from './Status.styles';

export const Status = ({ design = 'pink', text, iconKind }) => {
  return (
    <Box $design={design}>
      <IconStyled kind={iconKind} iconSize='24px' />
      <span>{text}</span>
    </Box>
  );
};
