import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import { useIsDesktop } from '../../../../hooks';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = observer(() => {
  const isDesktop = useIsDesktop();
  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    if (swiperStore.isHideMoreProfileInfo) {
      setTimeout(() => {
        setZIndex(undefined);
      }, 500);
    } else {
      setZIndex(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperStore.isHideMoreProfileInfo]);

  const mobileStyles = !isDesktop
    ? {
        height: `${swiperStore.offsetData.top}px`,
        zIndex: zIndex,
      }
    : {};

  return (
    <div className={styles.box} style={mobileStyles}>
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
});
