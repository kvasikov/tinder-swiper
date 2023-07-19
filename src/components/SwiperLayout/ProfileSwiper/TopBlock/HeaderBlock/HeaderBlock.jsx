import React from 'react';
import { Dropdown } from 'antd';
import { CustomIcon } from '../../../../common/CustomIcon';
import { SwitcherIcon } from '../../../../common/SwitcherIcon';
import { CategoriesBlock } from './CategoriesBlock';
import styles from './HeaderBlock.module.scss';

const SETTINGS_ITEMS = [
  {
    label: <span className={styles['item__label']}>Настройки фильтра</span>,
    key: '0',
    icon: <CustomIcon kind='filter' iconSize='16px' />,
    className: styles['item'],
    onClick: () => {
      console.log('Настройки фильтра');
    },
  },
  {
    label: <span className={styles['item__label']}>Календарь мероприятий</span>,
    key: '1',
    icon: <CustomIcon kind='calendar' iconSize='16px' isNoFill />,
    className: styles['item'],
    onClick: () => {
      console.log('Календарь мероприятий');
    },
  },
  {
    label: <span className={styles['item__label']}>Поделиться профилем</span>,
    key: '3',
    icon: <CustomIcon kind='share' iconSize='16px' isNoFill />,
    className: styles['item'],
    onClick: () => {
      console.log('Поделиться профилем');
    },
  },
];

const MODE_ITEMS = [
  {
    value: '1',
    iconKind: 'profile',
    isNoFill: true,
    onClick: () => {
      console.log('Режим профиля');
    },
  },
  {
    value: '2',
    iconKind: 'firework',
    isNoFill: false,
    onClick: () => {
      console.log('Режим организации');
    },
  },
];

export const HeaderBlock = () => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <div className={styles.title}>tweetmeet</div>
        <CategoriesBlock />
      </div>
      <div className={styles.right}>
        <Dropdown menu={{ items: SETTINGS_ITEMS }} trigger={['click']}>
          <button type='button' className={styles.calendar}>
            <CustomIcon className={styles.dots} kind='dots' iconSize='24px' />
          </button>
        </Dropdown>
        <div>
          <SwitcherIcon items={MODE_ITEMS} />
        </div>
      </div>
    </div>
  );
};
