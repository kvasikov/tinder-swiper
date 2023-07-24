import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { useIsDesktop } from '../../../../hooks';
import { swiperStore } from '../../store';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = observer(() => {
  const isDesktop = useIsDesktop();

  return (
    <div
      className={cn(styles.box, {
        [styles['box--active']]: !isDesktop && !swiperStore.isHideMoreProfileInfo,
      })}
    >
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
});
