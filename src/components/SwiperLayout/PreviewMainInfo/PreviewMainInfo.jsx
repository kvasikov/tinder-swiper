import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../../common/CustomIcon';
import styles from './PreviewMainInfo.module.scss';
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
    <div className={styles[`box--${color}`]}>
      <div className={styles['main-box']}>
        <span className={styles.name}>{name}</span>
        {birthDate && <span className={styles['birth-date']}>{getAgeByDate(birthDate)}</span>}
        <CustomIcon
          className={cn(styles['verify-icon'], {
            [styles['verify-icon--show']]: isVerified,
          })}
          kind='verify'
          iconSize='30px'
        />
      </div>
    </div>
  );
};
