import React from 'react';
import { PreviewMainInfo } from '../../common/PreviewMainInfo';
import { OrganizationBlock } from './OrganizationBlock';
import { ProfileMoreInfoBlock } from './ProfileMoreInfoBlock';
import { ActionBlock } from './ActionBlock';
import { Box } from './ProfileInfo.styles';

import { InfoItemBlock } from '../../common/PreviewMainInfo/InfoItemBlock';
import { StatusBlock } from '../../common/PreviewMainInfo/StatusBlock';

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
