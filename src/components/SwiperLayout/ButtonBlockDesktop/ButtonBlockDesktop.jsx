import React from 'react';
import { CustomIcon } from '../../common/CustomIcon';
import { Box, ButtonArrow, IconRotate } from './ButtonBlockDesktop.styles';

export const ButtonBlockDesktop = ({ swiperInstance }) => {
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
};
