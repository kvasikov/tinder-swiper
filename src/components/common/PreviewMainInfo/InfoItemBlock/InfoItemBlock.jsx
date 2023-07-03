import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../SwiperLayout/store';
import { useMediaBreakpoint } from '../../../../hooks';
import { breakpoints } from '../../../../assets/breakpoints';
import {
  OnlineIcon,
  IconStyled,
  InfoWrapper,
  InfoItemWrapper,
  InfoItemText,
} from './InfoItemBlock.styles';

export const InfoItemBlock = observer(({ color, profileData }) => {
  const { isHideMoreProfileInfo } = swiperStore;

  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const isShowMobile = !isDesktop && profileData.activePhotoIndex === 0;
  const isShowDesktop =
    isDesktop &&
    (!isHideMoreProfileInfo || (isHideMoreProfileInfo && profileData.activePhotoIndex === 0));

  const isShow = isShowMobile || isShowDesktop;

  if (!isShow) {
    return null;
  }

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
});
