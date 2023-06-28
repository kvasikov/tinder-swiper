import React from 'react';
import { CircleIcon } from '../../common/CircleIcon';
import { Box, IconDown } from './ButtonBlockDesktop.styles';

export const ButtonBlockDesktop = ({ swiperState }) => {
  const onPrevProfileClick = () => {
    swiperState.slidePrev();
  };

  const onNextProfileClick = () => {
    swiperState.slideNext();
  };

  return (
    <Box>
      <CircleIcon design='transparent' kind='arrowUp' onClick={onPrevProfileClick} />
      <IconDown kind='arrowUp' onClick={onNextProfileClick} />
    </Box>
  );
};
