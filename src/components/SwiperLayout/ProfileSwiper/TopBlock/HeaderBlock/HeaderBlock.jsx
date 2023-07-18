import React from 'react';
import { CustomIcon } from '../../../../common/CustomIcon';
import styles from './HeaderBlock.module.scss';

export const HeaderBlock = () => {
  const onCategoriesOpen = () => console.log('show categories');

  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <div className={styles.title}>tweetmeet</div>
        <button type='button' className={styles.categories} onClick={onCategoriesOpen}>
          <CustomIcon className={styles.plain} kind='plain' iconSize='16px' isNoFill />
        </button>
      </div>
      <div className={styles.right}>
        <div>icon1</div>
        <div>icon2</div>
      </div>
    </div>
  );
};