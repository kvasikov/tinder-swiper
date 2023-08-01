import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../CustomIcon';
import styles from './BadgeProfilePreview.module.scss';

export const BadgeProfilePreview = ({ photoSrc, title, theme = 'dark', onClick }) => {
  return (
    <button className={cn(styles.box, styles[`box--${theme}`])} onClick={onClick}>
      <img src={photoSrc} alt='ph' className={styles.avatar} />
      <div>{title}</div>
      <CustomIcon kind='arrowRight' iconSize='16px' isNoFill className={styles.icon} />
    </button>
  );
};
