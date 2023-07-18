import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../../../common/CustomIcon';
import styles from './InfoItemBlock.module.scss';

export const InfoItemBlock = ({ color, profileData }) => {
  if (!profileData.infoData) {
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
    <div className={styles['info-wrapper__item']}>
      {isOnline ? (
        <div className={styles['online-icon']} />
      ) : (
        <CustomIcon
          className={cn(styles.icon, styles[`icon--${color}`])}
          kind={iconKind}
          iconSize='8px'
        />
      )}
      <span
        className={cn(
          styles['info-wrapper__item__text'],
          styles[`info-wrapper__item__text--${color}`],
        )}
      >
        {text}
      </span>
    </div>
  );

  return (
    <div className={styles['info-wrapper']}>
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
    </div>
  );
};
