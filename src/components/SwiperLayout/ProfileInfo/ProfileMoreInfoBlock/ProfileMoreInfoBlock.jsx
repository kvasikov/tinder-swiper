import React from 'react';

export const ProfileMoreInfoBlock = ({ profileData }) => {
  if (profileData?.isOrganization) {
    return null;
  }

  return (
    <div>
      <div>ProfileMoreInfoBlock</div>
    </div>
  );
};
