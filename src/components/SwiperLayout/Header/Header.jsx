import React, { useState } from 'react';
import { Drawer } from 'antd';
import cn from 'classnames';
import { CustomIcon } from '../../common/CustomIcon';
import styles from './Header.module.scss';

const MENU_ITEMS = [
  {
    key: '1',
    label: 'Рулетка',
    iconKind: 'apps',
  },
  {
    key: '2',
    label: 'Интересные места',
    iconKind: 'earth',
  },
  {
    key: '3',
    label: 'Tweet',
    iconKind: 'tweet',
  },
  {
    key: '4',
    label: 'Чаты',
    iconKind: 'messages',
  },
  {
    key: '5',
    label: 'Календарь мероприятий',
    iconKind: 'calendar',
  },
  {
    key: '6',
    label: 'Профиль',
    iconKind: 'cabinet',
  },
  {
    key: '7',
    label: 'Выйти',
    iconKind: 'logout',
  },
];

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <header className={styles.box}>
      <div className={styles.content}>
        <button type='button' className={styles.button} onClick={() => setIsShowMenu(!isShowMenu)}>
          <CustomIcon kind={isShowMenu ? 'cross' : 'burger'} iconSize='24px' />
        </button>
        <h1 className={styles.title}>tweetmeet</h1>
      </div>
      <Drawer
        rootStyle={{ marginTop: '72px' }}
        maskStyle={{ backgroundColor: 'transparent' }}
        contentWrapperStyle={{ minWidth: '402px' }}
        bodyStyle={{ padding: 0 }}
        footer={null}
        placement='left'
        open={isShowMenu}
        closable={false}
        onClose={() => setIsShowMenu(false)}
      >
        <div className={styles.content}>
          <div className={styles.body}>
            {MENU_ITEMS.map((item, index) => {
              const IS_ACTIVE = index === 0; // TODO: заглушка

              return (
                <button
                  key={item.key}
                  className={cn(styles['menu-item'], {
                    [styles['menu-item--active']]: IS_ACTIVE,
                  })}
                >
                  <CustomIcon kind={item.iconKind} iconSize='24px' isNoFill />
                  <span className={styles['menu-item__label']}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Drawer>
    </header>
  );
};
