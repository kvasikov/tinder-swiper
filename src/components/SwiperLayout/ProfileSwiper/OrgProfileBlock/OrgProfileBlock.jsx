import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import styles from './OrgProfileBlock.module.scss';

export const OrgProfileBlock = observer(() => {
  if (!swiperStore.currentProfileData.infoData) {
    return null;
  }

  const onClose = () => {
    swiperStore.updateProfileData(swiperStore.currentProfileData.id, { isOrgProfileShow: false });
  };

  const isShow = swiperStore.currentProfileData?.isOrgProfileShow;

  return (
    <div
      className={cn(styles.box, {
        [styles['box--show']]: isShow,
      })}
    >
      <div className={styles['photo-wrapper']}>
        photo
        <button onClick={onClose}>close</button>
      </div>
      <div className={styles['info-wrapper']}>
        info
        <div style={{ height: '900px' }}>content</div>
      </div>
    </div>
  );
});
