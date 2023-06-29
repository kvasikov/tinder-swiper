import React from 'react';
import { toJS } from 'mobx';
import {
  Box,
  MainBox,
  Name,
  BirthData,
  VerifyIcon,
  OnlineIcon,
  IconStyled,
  InfoWrapper,
  InfoItemWrapper,
  InfoItemText,
} from './PreviewMainInfo.styles';
import { getAgeByDate } from './utils';

const InfoItemBlock = ({ color, profileData }) => {
  const data = profileData.infoData;
  const hasSomeItem =
    data.recentlyActive ||
    profileData.distance ||
    data.growth ||
    data.city?.name ||
    data.schools?.length ||
    data.jobs?.length;

  if (!hasSomeItem) {
    return null;
  }

  const Item = ({ iconKind, isOnline, text }) => (
    <InfoItemWrapper>
      {isOnline ? <OnlineIcon /> : <IconStyled kind={iconKind} iconSize='8px' $color={color} />}
      <InfoItemText $color={color}>{text}</InfoItemText>
    </InfoItemWrapper>
  );

  return (
    <InfoWrapper>
      {data.recentlyActive && <Item isOnline text='Недавно активные' />}
      {profileData.distance && <Item iconKind='geo' text={`${profileData.distance} км от тебя`} />}
      {data.growth && <Item iconKind='height' text={`${data.growth} см`} />}
      {data.city?.name && <Item iconKind='home' text={`Живет в городе ${data.city.name}`} />}
      {data.schools?.length > 0 &&
        data.schools.map((school, index) => (
          <Item key={index} iconKind='education' text={school.name} />
        ))}
      {data.jobs?.length > 0 &&
        data.jobs.map((job, index) => (
          <Item key={index} iconKind='business' text={job.title.name} />
        ))}
    </InfoWrapper>
  );
};

export const PreviewMainInfo = ({ color = 'white', profileData, isShownMobile }) => {
  if (!profileData?.infoData) {
    return null;
  }

  console.log(toJS(profileData));

  const { name, birthDate, isVerified } = profileData.infoData;

  return (
    <Box $color={color} $isShownMobile={isShownMobile}>
      <MainBox>
        <Name>{name}</Name>
        {birthDate && <BirthData>{getAgeByDate(birthDate)}</BirthData>}
        <VerifyIcon kind='verify' iconSize='30px' $isShown={isVerified} />
      </MainBox>
      <InfoItemBlock color={color} profileData={profileData} />
    </Box>
  );
};
