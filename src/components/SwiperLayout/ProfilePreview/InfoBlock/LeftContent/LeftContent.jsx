import React, { useEffect } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../store';
import { PreviewMainInfo } from '../../../PreviewMainInfo';
import { InfoItemBlock } from '../../../PreviewMainInfo/InfoItemBlock';
import { DescriptorsBlock } from '../../../PreviewMainInfo/DescriptorsBlock';
import { OrganizationPreview } from '../../../PreviewMainInfo/OrganizationPreview';
import { StatusBlock } from '../../../PreviewMainInfo/StatusBlock';
import styles from './LeftContent.module.scss';

export const LeftContent = observer(({ profileData }) => {
  const isShowInfoItems = profileData.activePhotoIndex === 0;
  const isShowDescriptors = profileData.activePhotoIndex >= 1 && profileData.activePhotoIndex <= 2;

  useEffect(() => {
    if (profileData.activePhotoIndex >= 3 && !profileData.isStatusShow) {
      swiperStore.updateProfileData(profileData.id, { isStatusShow: true });
    } else if (profileData.activePhotoIndex < 3 && profileData.isStatusShow) {
      swiperStore.updateProfileData(profileData.id, { isStatusShow: false });
    }
  }, [profileData.activePhotoIndex, profileData.id, profileData.isStatusShow]);

  return (
    <div
      className={cn(styles.box, {
        [styles['box--hide']]: profileData.isHideMoreProfileInfo,
      })}
    >
      <PreviewMainInfo profileData={profileData} />
      {isShowInfoItems && <InfoItemBlock color='white' profileData={profileData} />}
      {isShowDescriptors && <DescriptorsBlock profileData={profileData} />}
      {profileData.isStatusShow && <StatusBlock profileData={profileData} />}
      {profileData.isOrganization && (
        <OrganizationPreview profileData={profileData} theme='dark' withMarginTop />
      )}
    </div>
  );
});
