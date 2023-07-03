import React from 'react';
import { InfoItem } from '../../../common/InfoItem';
import { Badge } from '../../../common/Badge';

export const OrganizationBlock = ({ profileData }) => {
  if (!profileData?.isOrganization) {
    return null;
  }

  return (
    <div>
      <InfoItem title='Организатор'>
        <Badge text={profileData.infoData.name} design='transparent' />
      </InfoItem>
      {profileData.organizationData?.description && (
        <InfoItem title='Описание' text={profileData.organizationData?.description} />
      )}
      {/* TODO: брать список увлечений их profileData при реальном АПИ */}
      <InfoItem title='Когда'>
        <Badge text='С 22 по 24 февраля' design='transparent' />
      </InfoItem>
      <InfoItem title='О соседе' text='Тут какой-то текст о соседе какого хочешь найти' />
      <InfoItem title='Опыт аренды'>
        <Badge text='Да' design='transparent' />
      </InfoItem>
      <InfoItem title='Способ связи'>
        <Badge text='Телеграмм' design='transparent' />
        <Badge text='VK' design='transparent' />
      </InfoItem>
    </div>
  );
};
