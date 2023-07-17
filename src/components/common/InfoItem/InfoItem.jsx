import React from 'react';
import styles from './InfoItem.module.scss';

export const InfoItem = ({ title, text, children }) => {
  return (
    <div className={styles.box}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles['wrapper-content']}>{children}</div>}
    </div>
  );
};
