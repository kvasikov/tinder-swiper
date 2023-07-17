import React from 'react';
import cn from 'classnames';
import styles from './Badge.module.scss';

export const Badge = ({ text, design = 'transparent', className, onClick }) => (
  <div
    className={cn(className, styles.box, styles[`box--${design}`], {
      [styles['box--pointer']]: typeof onClick === 'function',
    })}
    onClick={onClick}
  >
    <span>{text}</span>
  </div>
);
