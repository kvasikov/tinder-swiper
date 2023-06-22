import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../../../store';
import { CustomIcon } from '../../../../common/CustomIcon';
import { Box, IconWrapper, InfoIconWrapper } from './RightContent.styles';

export const RightContent = observer(() => {
  const { swiperInstance, isSwiperEnable, setSwiperStatus } = swiperStore;

  const onInfoClick = () => {
    if (isSwiperEnable) {
      swiperInstance.disable();
      setSwiperStatus(false);
    } else {
      swiperInstance.enable();
      setSwiperStatus(true);
    }
  };

  return (
    <Box>
      <IconWrapper>
        <CustomIcon kind='chat' />
      </IconWrapper>
      <InfoIconWrapper $isSwiperEnable={isSwiperEnable} onClick={onInfoClick}>
        <CustomIcon kind='arrowUp' />
      </InfoIconWrapper>
    </Box>
  );
});
