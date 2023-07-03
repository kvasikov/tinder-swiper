import React from 'react';
import { InfoItem } from '../../../common/InfoItem';

export const ProfileMoreInfoBlock = ({ profileData }) => {
  if (profileData?.isOrganization) {
    return null;
  }

  return (
    <div>
      {profileData.infoData?.bio && <InfoItem title='Обо мне' text={profileData.infoData?.bio} />}
    </div>
  );
};
