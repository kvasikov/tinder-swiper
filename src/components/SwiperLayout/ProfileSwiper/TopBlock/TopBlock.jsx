import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useIsDesktop } from '../../../../hooks';
import { swiperStore } from '../../store';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = observer(() => {
  const isDesktop = useIsDesktop();

  const [wrapperHeight, setWrapperHeight] = useState(0);

  const wrapperRef = useCallback((node) => {
    setWrapperHeight(node.clientHeight);
  }, []);

  const hideStyles =
    !isDesktop && !swiperStore.isHideMoreProfileInfo
      ? {
          marginTop: `-${wrapperHeight}px`,
        }
      : {};

  return (
    <div ref={wrapperRef} className={styles.box} style={hideStyles}>
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
});
