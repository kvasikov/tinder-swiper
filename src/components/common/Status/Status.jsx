import React from 'react';
import cn from 'classnames';
import styles from './Status.module.scss';

export const Status = ({ design = 'pink', text, imgPath, className }) => {
  return (
    <div className={cn(className, styles.box, styles[`box--${design}`])}>
      <img className={styles.img} src={imgPath} alt={design} />
      <span>{text}</span>
    </div>
  );
};
