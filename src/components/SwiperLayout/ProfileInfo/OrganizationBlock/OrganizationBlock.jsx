import React from 'react';
import { InfoItem } from '../../../common/InfoItem';

export const OrganizationBlock = ({ profileData }) => {
  if (!profileData?.isOrganization) {
    return null;
  }

  return (
    <div>
      {profileData.organizationData?.description && (
        <InfoItem title='Описание' text={profileData.organizationData?.description} />
      )}
    </div>
  );
};
