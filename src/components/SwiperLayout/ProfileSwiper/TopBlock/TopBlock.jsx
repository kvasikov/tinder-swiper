import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { useIsDesktop } from '../../../../hooks';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = observer(() => {
  const isDesktop = useIsDesktop();

  const mobileStyles = !isDesktop
    ? {
        height: `${swiperStore.offsetTop}px`,
        zIndex: !swiperStore.isHideMoreProfileInfo && 1,
      }
    : {};

  return (
    <div className={styles.box} style={mobileStyles}>
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
});
