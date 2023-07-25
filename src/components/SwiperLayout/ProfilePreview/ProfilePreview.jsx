import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { DATA_ATTR_PROFILE_WRAPPER_ID } from '../../../constants/attributes';
import { PhotoBlock } from './PhotoBlock';
import styles from './ProfilePreview.module.scss';

export const ProfilePreview = observer(({ profileData, withProfileInfo }) => {
  const attrProps = { [DATA_ATTR_PROFILE_WRAPPER_ID]: true };

  return (
    <div
      className={cn(styles.box, 'scrollbar', {
        [styles['box--overflow']]: !profileData.isHideMoreProfileInfo && withProfileInfo,
      })}
      {...attrProps}
    >
      <PhotoBlock profileData={profileData} withProfileInfo={withProfileInfo} />
    </div>
  );
});
