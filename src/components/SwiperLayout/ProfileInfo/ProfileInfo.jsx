import React from 'react';
import { PreviewMainInfo } from '../PreviewMainInfo';
import { InfoItemBlock } from '../PreviewMainInfo/InfoItemBlock';
import { StatusBlock } from '../PreviewMainInfo/StatusBlock';
import { OrganizationBlock } from './OrganizationBlock';
import { ProfileMoreInfoBlock } from './ProfileMoreInfoBlock';
import { ActionBlock } from './ActionBlock';
import styles from './ProfileInfo.module.scss';

export const ProfileInfo = ({ profileData }) => {
  return (
    <div className={styles.box}>
      <PreviewMainInfo color='black' profileData={profileData} />
      <InfoItemBlock color='black' profileData={profileData} />
      <StatusBlock profileData={profileData} />
      <OrganizationBlock profileData={profileData} />
      <ProfileMoreInfoBlock profileData={profileData} />
      <ActionBlock profileData={profileData} />
    </div>
  );
};
