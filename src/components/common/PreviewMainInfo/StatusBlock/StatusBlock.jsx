import React, { useEffect } from 'react';
import { swiperStore } from '../../../SwiperLayout/store';
import { Status } from '../../Status';
import { Box } from './StatusBlock.styles';

export const StatusBlock = ({ profileData }) => {
  const { updateProfileData } = swiperStore;

  useEffect(() => {
    if (profileData.activePhotoIndex >= 3 && !profileData.isStatusShow) {
      updateProfileData(profileData.id, { isStatusShow: true });
    } else if (profileData.activePhotoIndex < 3 && profileData.isStatusShow) {
      updateProfileData(profileData.id, { isStatusShow: false });
    }
  }, [profileData.activePhotoIndex, profileData.id, profileData.isStatusShow, updateProfileData]);

  if (!profileData.isStatusShow) {
    return null;
  }

  return (
    <Box>
      <Status
        text={profileData.statusData.text}
        design={profileData.statusData.design}
        iconKind={profileData.statusData.iconKind}
      />
    </Box>
  );
};
