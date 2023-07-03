import React from 'react';
import { PreviewMainInfo } from '../PreviewMainInfo';
import { InfoItemBlock } from '../PreviewMainInfo/InfoItemBlock';
import { StatusBlock } from '../PreviewMainInfo/StatusBlock';
import { OrganizationBlock } from './OrganizationBlock';
import { ProfileMoreInfoBlock } from './ProfileMoreInfoBlock';
import { ActionBlock } from './ActionBlock';
import { Box } from './ProfileInfo.styles';

export const ProfileInfo = ({ swiperState, profileData }) => {
  return (
    <Box>
      <PreviewMainInfo color='black' profileData={profileData} />
      <InfoItemBlock color='black' profileData={profileData} />
      <StatusBlock profileData={profileData} />
      <div>
        <OrganizationBlock profileData={profileData} />
        <ProfileMoreInfoBlock profileData={profileData} />
        <ActionBlock profileData={profileData} swiperState={swiperState} />
      </div>
    </Box>
  );
};
