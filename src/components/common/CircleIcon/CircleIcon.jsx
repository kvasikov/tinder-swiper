import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../CustomIcon';
import styles from './CircleIcon.module.scss';

export const CircleIcon = ({ kind, design = 'light', className, onClick, ...props }) => {
  return (
    <button
      className={cn(className, styles.box, styles[`box--${design}`], {
        [styles['box--pointer']]: typeof onClick === 'function',
      })}
      type='button'
      onClick={onClick}
      {...props}
    >
      <CustomIcon kind={kind} />
    </button>
  );
};
