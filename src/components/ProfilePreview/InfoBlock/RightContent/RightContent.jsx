import React from 'react';
import { CustomIcon } from '../../../common/CustomIcon';
import { Box, IconWrapper, InfoIconWrapper } from './RightContent.styles';

export const RightContent = () => {
  return (
    <Box>
      <IconWrapper>
        <CustomIcon kind='chat' />
      </IconWrapper>
      <InfoIconWrapper>
        <CustomIcon kind='arrowUp' />
      </InfoIconWrapper>
    </Box>
  );
};
