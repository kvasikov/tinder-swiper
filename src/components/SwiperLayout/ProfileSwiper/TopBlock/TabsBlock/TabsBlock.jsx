import React from 'react';
import { observer } from 'mobx-react';
import { TAB_LIST } from '../../../../../constants/tabs';
import { swiperStore } from '../../../store';
import { TabsHorizontal } from '../../../../common/TabsHorizontal';
import styles from './TabsBlock.module.scss';

export const TabsBlock = observer(() => {
  const onTabChange = (tabValue) => {
    swiperStore.updateTabValue(tabValue);
  };

  return (
    <div className={styles.box}>
      <TabsHorizontal list={TAB_LIST} value={swiperStore.activeTabValue} onChange={onTabChange} />
    </div>
  );
});
