import React from 'react';
import { InfoItemBlock } from './InfoItemBlock';
import { DescriptorsBlock } from './DescriptorsBlock';
import { StatusBlock } from './StatusBlock';
import { Box, MainBox, Name, BirthData, VerifyIcon } from './PreviewMainInfo.styles';
import { getAgeByDate } from './utils';

export const PreviewMainInfo = ({ color = 'white', profileData }) => {
  if (!profileData?.infoData) {
    return null;
  }

  const { name, birthDate, isVerified } = profileData.infoData;

  return (
    <Box $color={color}>
      <MainBox>
        <Name>{name}</Name>
        {birthDate && <BirthData>{getAgeByDate(birthDate)}</BirthData>}
        <VerifyIcon kind='verify' iconSize='30px' $isShown={isVerified} />
      </MainBox>
      <InfoItemBlock color={color} profileData={profileData} />
      <DescriptorsBlock profileData={profileData} />
      <StatusBlock profileData={profileData} />
    </Box>
  );
};
