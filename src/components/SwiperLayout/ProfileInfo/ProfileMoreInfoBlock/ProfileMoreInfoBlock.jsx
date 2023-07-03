import React from 'react';
import { InfoItem } from '../../../common/InfoItem';
import { Badge } from '../../../common/Badge';

export const ProfileMoreInfoBlock = ({ profileData }) => {
  if (profileData?.isOrganization) {
    return null;
  }

  return (
    <div>
      {profileData.infoData?.bio && <InfoItem title='Обо мне' text={profileData.infoData?.bio} />}
      {/* TODO: брать список увлечений их profileData при реальном АПИ */}
      <InfoItem title='Мои увлечения'>
        <Badge text='Рисование' design='transparent' />
        <Badge text='Велосипеды' design='transparent' />
      </InfoItem>
      <InfoItem title='Курение'>
        <Badge text='Да' design='transparent' />
      </InfoItem>
    </div>
  );
};
