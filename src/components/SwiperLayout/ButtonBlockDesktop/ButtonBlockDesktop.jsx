import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../../store';
import { CustomIcon } from '../../common/CustomIcon';
import { Box, ButtonArrow, IconRotate } from './ButtonBlockDesktop.styles';

export const ButtonBlockDesktop = observer(() => {
  const { swiperInstance } = swiperStore;

  const onPrevProfileClick = () => {
    swiperInstance.slidePrev();
  };

  const onNextProfileClick = () => {
    swiperInstance.slideNext();
  };

  return (
    <Box>
      <ButtonArrow onClick={onPrevProfileClick}>
        <CustomIcon kind='arrowUp' />
      </ButtonArrow>
      <ButtonArrow onClick={onNextProfileClick}>
        <IconRotate kind='arrowUp' />
      </ButtonArrow>
    </Box>
  );
});
