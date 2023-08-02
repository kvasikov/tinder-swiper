import React from 'react';
import cn from 'classnames';
import styles from './PhotoList.module.scss';

export const PhotoList = ({
  activePhotoIndex = 0,
  photoList = [],
  isUnBorderBottom,
  onChangePhoto,
}) => {
  return (
    <div className={styles.box}>
      <div className={styles['handler-wrapper']}>
        <div className={styles['handler-photo']} onMouseUp={onChangePhoto(-1)} />
        <div className={styles['handler-photo']} onMouseUp={onChangePhoto(1)} />
      </div>
      <div className={styles['top-block']}>
        <div
          className={cn(styles['bullet-list-wrapper'], {
            [styles['bullet-list-wrapper--hide']]: photoList.length <= 1,
          })}
        >
          {photoList.map((_, index) => (
            <div
              className={cn(styles.bullet, {
                [styles['bullet--active']]: index <= activePhotoIndex,
              })}
              key={index}
            />
          ))}
        </div>
      </div>
      <img
        className={cn(styles['photo-img'], {
          [styles['photo-img--un-border']]: isUnBorderBottom,
        })}
        src={photoList[activePhotoIndex]}
      />
    </div>
  );
};
