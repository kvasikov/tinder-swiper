import React, { useState } from 'react';
import cn from 'classnames';
import { CustomIcon } from '../CustomIcon';
import styles from './SwitcherIcon.module.scss';

export const SwitcherIcon = ({ items = [], defaultValue }) => {
  const [value, setValue] = useState(defaultValue || items[0]?.value);

  const onChange = (item) => () => {
    setValue(item.value);
    item?.onClick();
  };

  return (
    <div className={styles.box}>
      {items.map((item) => (
        <button
          className={cn(styles.item, {
            [styles['item--active']]: value === item.value,
          })}
          key={item.value}
          type='button'
          onClick={onChange(item)}
        >
          <CustomIcon kind={item.iconKind} isNoFill={item.isNoFill} iconSize='16px' />
        </button>
      ))}
    </div>
  );
};
