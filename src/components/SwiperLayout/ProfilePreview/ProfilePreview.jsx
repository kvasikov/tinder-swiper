import React from 'react';
import { observer } from 'mobx-react';
import { DATA_ATTR_PROFILE_WRAPPER_ID } from '../../../constants/attributes';
import { swiperStore } from '../store';
import { PhotoBlock } from './PhotoBlock';
import { Box } from './ProfilePreview.styles';

export const ProfilePreview = observer(({ profileData }) => {
  const { isShowMoreProfileInfo } = swiperStore;

  const attrProps = { [DATA_ATTR_PROFILE_WRAPPER_ID]: true };

  return (
    <Box $isShowMoreProfileInfo={isShowMoreProfileInfo} {...attrProps}>
      <PhotoBlock profileData={profileData} />
    </Box>
  );
});
