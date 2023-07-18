import React from 'react';
import { TabsBlock } from './TabsBlock';
import { HeaderBlock } from './HeaderBlock';
import styles from './TopBlock.module.scss';

export const TopBlock = () => {
  return (
    <div className={styles.box}>
      <HeaderBlock />
      <TabsBlock />
    </div>
  );
};
