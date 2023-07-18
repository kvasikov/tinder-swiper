import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../CustomIcon';
import styles from './TabsHorizontal.module.scss';

export const TabsHorizontal = ({ list, value, onChange }) => {
  const onInnerChange = (tabValue) => () => {
    console.log(onChange);
    onChange(tabValue);
  };

  return (
    <div className={styles.box}>
      {list.map((tab) => (
        <button key={tab.value} className={styles.tab} onClick={onInnerChange(tab.value)}>
          <CustomIcon
            className={cn(styles.icon, {
              [styles['icon--active']]: value === tab.value,
            })}
            kind={tab.iconKind}
            iconSize='16px'
            isNoFill
          />
          <span
            className={cn(styles.hr, {
              [styles['hr--active']]: value === tab.value,
            })}
          />
        </button>
      ))}
    </div>
  );
};
