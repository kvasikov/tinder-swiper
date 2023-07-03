import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../store';
import { PreviewMainInfo } from '../../../PreviewMainInfo';
import { InfoItemBlock } from '../../../PreviewMainInfo/InfoItemBlock';
import { DescriptorsBlock } from '../../../PreviewMainInfo/DescriptorsBlock';
import { StatusBlock } from '../../../PreviewMainInfo/StatusBlock';
import { Box } from './LeftContent.styles';

export const LeftContent = observer(({ profileData }) => {
  const { isHideMoreProfileInfo, updateProfileData } = swiperStore;

  const isShowInfoItems = profileData.activePhotoIndex === 0;
  const isShowDescriptors = profileData.activePhotoIndex >= 1 && profileData.activePhotoIndex <= 2;

  useEffect(() => {
    if (profileData.activePhotoIndex >= 3 && !profileData.isStatusShow) {
      updateProfileData(profileData.id, { isStatusShow: true });
    } else if (profileData.activePhotoIndex < 3 && profileData.isStatusShow) {
      updateProfileData(profileData.id, { isStatusShow: false });
    }
  }, [profileData.activePhotoIndex, profileData.id, profileData.isStatusShow, updateProfileData]);

  return (
    <Box $isHide={isHideMoreProfileInfo}>
      <PreviewMainInfo profileData={profileData} />
      {isShowInfoItems && <InfoItemBlock color='white' profileData={profileData} />}
      {isShowDescriptors && <DescriptorsBlock profileData={profileData} />}
      {profileData.isStatusShow && <StatusBlock profileData={profileData} />}
    </Box>
  );
});
