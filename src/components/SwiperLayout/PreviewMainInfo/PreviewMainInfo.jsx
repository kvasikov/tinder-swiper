import React from 'react';
import { Box, MainBox, Name, BirthData, VerifyIcon } from './PreviewMainInfo.styles';
import { getAgeByDate } from './utils';

export const PreviewMainInfo = ({ color = 'white', profileData }) => {
  if (!profileData?.infoData) {
    return null;
  }

  const orgData = profileData?.organizationData;
  const humanData = profileData?.infoData;

  const name = profileData.isOrganization ? orgData.organizationName : humanData.name;
  const birthDate = !profileData.isOrganization && humanData.birthDate;
  const isVerified = profileData.isOrganization ? orgData.isVerified : humanData.isVerified;

  return (
    <Box $color={color}>
      <MainBox>
        <Name>{name}</Name>
        {birthDate && <BirthData>{getAgeByDate(birthDate)}</BirthData>}
        <VerifyIcon kind='verify' iconSize='30px' $isShown={isVerified} />
      </MainBox>
    </Box>
  );
};
