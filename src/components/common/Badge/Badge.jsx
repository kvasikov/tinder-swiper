import React from 'react';
import { Box } from './Badge.styles';

export const Badge = ({ text, design = 'transparent', onClick }) => (
  <Box $design={design} onClick={onClick}>
    <span>{text}</span>
  </Box>
);
