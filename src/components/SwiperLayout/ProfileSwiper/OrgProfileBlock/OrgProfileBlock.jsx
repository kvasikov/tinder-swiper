import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../store';
import styles from './OrgProfileBlock.module.scss';

export const OrgProfileBlock = observer(() => {
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
      <button onClick={onClose}>close</button>
      <div>OrgProfileBlock</div>
    </div>
  );
});
