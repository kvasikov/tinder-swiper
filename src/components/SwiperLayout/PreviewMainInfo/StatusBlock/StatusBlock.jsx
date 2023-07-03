import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { Status } from '../../../common/Status';
import { Box } from './StatusBlock.styles';

export const StatusBlock = observer(({ profileData }) => {
  const { isHideMoreProfileInfo } = swiperStore;

  if (!profileData.statusData || profileData.isOrganization) {
    return null;
  }

  return (
    <Box $isHideMoreProfileInfo={isHideMoreProfileInfo}>
      <Status
        text={profileData.statusData.text}
        design={profileData.statusData.design}
        imgPath={profileData.statusData.imgPath}
      />
    </Box>
  );
});
