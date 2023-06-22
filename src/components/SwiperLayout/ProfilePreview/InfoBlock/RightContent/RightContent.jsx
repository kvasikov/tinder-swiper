import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../../../store';
import { CustomIcon } from '../../../../common/CustomIcon';
import { Box, IconWrapper, InfoIconWrapper } from './RightContent.styles';

export const RightContent = observer(() => {
  const { swiperInstance } = swiperStore;

  const swiperIsEnable = useRef(true);

  const onInfoClick = () => {
    if (swiperIsEnable.current) {
      swiperInstance.disable();
      swiperIsEnable.current = false;
    } else {
      swiperInstance.enable();
      swiperIsEnable.current = true;
    }
  };

  return (
    <Box>
      <IconWrapper>
        <CustomIcon kind='chat' />
      </IconWrapper>
      <InfoIconWrapper onClick={onInfoClick}>
        <CustomIcon kind='arrowUp' />
      </InfoIconWrapper>
    </Box>
  );
});
