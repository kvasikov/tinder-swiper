import React from 'react';
import { CustomIcon } from '../../common/CustomIcon';
import { Box, ButtonArrow, IconRotate } from './ButtonBlockDesktop.styles';

export const ButtonBlockDesktop = ({ swiperState }) => {
  const onPrevProfileClick = () => {
    swiperState.slidePrev();
  };

  const onNextProfileClick = () => {
    swiperState.slideNext();
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
};
