import React from 'react';
import { ProfilePreivew } from '../ProfilePreivew';
import { ProfileInfo } from '../ProfileInfo';
import { Box, ProfileWrapper, SideWrapper } from './SwiperLayout.styles';

export const SwiperLayout = () => {
  return (
    <Box>
      <ProfileWrapper>
        <SideWrapper>
          <ProfilePreivew />
        </SideWrapper>
        <SideWrapper>
          <ProfileInfo />
        </SideWrapper>
      </ProfileWrapper>
    </Box>
  );
};
