import React from 'react';
import cn from 'classnames';
import { CustomIcon } from '../../../common/CustomIcon';
import styles from './BottomBlock.module.scss';

const MESSAGE_KEY = '4';

const MENU_ITEMS = [
  {
    key: '1',
    iconKind: 'apps',
    onClick: () => {
      console.log('apps');
    },
  },
  {
    key: '2',
    iconKind: 'earth',
    onClick: () => {
      console.log('earth');
    },
  },
  {
    key: '3',
    iconKind: 'circlePurple',
    onClick: () => {
      console.log('tweet');
    },
  },
  {
    key: MESSAGE_KEY,
    iconKind: 'messages',
    onClick: () => {
      console.log('messages');
    },
  },
  {
    key: '5',
    iconKind: 'cabinet',
    onClick: () => {
      console.log('cabinet');
    },
  },
];

export const BottomBlock = () => {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        {MENU_ITEMS.map((item, index) => (
          <button
            key={item.key}
            className={cn(styles.item, {
              [styles['item--active']]: index === 1, // TODO: заглушка
            })}
            type='button'
            onClick={item.onClick}
          >
            <CustomIcon kind={item.iconKind} iconSize='24px' isNoFill />
            {/* TODO: 92 как заглушка пока нет АПИ */}
            {item.key === MESSAGE_KEY && <span className={styles.count}>92</span>}
          </button>
        ))}
      </div>
    </div>
  );
};
