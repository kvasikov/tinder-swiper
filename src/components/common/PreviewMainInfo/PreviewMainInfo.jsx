import React from 'react';
import { Box, MainBox, Name, BirthData, IconStyled } from './PreviewMainInfo.styles';
import { getAgeByDate } from './utils';

export const PreviewMainInfo = ({ color = 'white', profileData, isShownMobile }) => {
  if (!profileData?.infoData) {
    return null;
  }

  const { name, birthDate, isVerified } = profileData.infoData;

  return (
    <Box $color={color} $isShownMobile={isShownMobile}>
      <MainBox>
        <Name>{name}</Name>
        {birthDate && <BirthData>{getAgeByDate(birthDate)}</BirthData>}
        <IconStyled kind='verify' iconSize='30px' $isShown={isVerified} />
      </MainBox>
    </Box>
  );
};
