import React from 'react';

export const OrganizationBlock = ({ profileData }) => {
  if (!profileData.isOrganization) {
    return null;
  }

  return (
    <div>
      <div>OrganizationBlock</div>
    </div>
  );
};
