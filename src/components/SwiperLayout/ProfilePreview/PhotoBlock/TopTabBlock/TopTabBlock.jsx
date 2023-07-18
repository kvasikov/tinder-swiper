import React from 'react';
import { observer } from 'mobx-react';
import { TAB_LIST } from '../../../../../constants/tabs';
import { swiperStore } from '../../../store';
import { TabsHorizontal } from '../../../../common/TabsHorizontal';
import styles from './TopTabBlock.module.scss';

export const TopTabBlock = observer(() => {
  const onTabChange = (tabValue) => {
    swiperStore.updateTabValue(tabValue);
  };

  return (
    <div className={styles.box}>
      <TabsHorizontal list={TAB_LIST} value={swiperStore.activeTabValue} onChange={onTabChange} />
    </div>
  );
});
