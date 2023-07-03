import React from 'react';
import { Box, ImgStyled } from './Status.styles';

export const Status = ({ design = 'pink', text, imgPath }) => {
  return (
    <Box $design={design}>
      <ImgStyled src={imgPath} alt={design} />
      <span>{text}</span>
    </Box>
  );
};
