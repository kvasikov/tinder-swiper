import React from 'react';
import cn from 'classnames';
import { useIsDesktop } from '../../../../hooks';
import { swiperStore } from '../../store';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = () => {
  const isDesktop = useIsDesktop();

  return (
    <div
      className={cn(styles.box, {
        [styles['box--active']]:
          !isDesktop && !swiperStore.currentProfileData.isHideMoreProfileInfo,
      })}
    >
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
};
