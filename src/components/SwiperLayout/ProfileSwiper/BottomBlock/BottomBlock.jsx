import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { CustomIcon } from '../../../common/CustomIcon';
import { swiperStore } from '../../store';
import styles from './BottomBlock.module.scss';

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
    iconKind: 'tweet',
    onClick: () => {
      console.log('tweet');
    },
  },
  {
    key: '4',
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

export const BottomBlock = observer(() => {
  return (
    <div
      className={cn(styles.box, {
        [styles['box--hide']]: !swiperStore.isHideMoreProfileInfo,
      })}
    >
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
          </button>
        ))}
      </div>
    </div>
  );
});
