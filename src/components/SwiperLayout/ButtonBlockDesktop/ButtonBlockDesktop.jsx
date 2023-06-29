import React from 'react';
import { CircleIcon } from '../../common/CircleIcon';
import { Box, IconDown } from './ButtonBlockDesktop.styles';

export const ButtonBlockDesktop = ({ swiperState }) => {
  const onPrevProfileClick = () => {
    if (swiperState.animating) {
      return;
    }

    swiperState.slidePrev(250, false);
  };

  const onNextProfileClick = () => {
    if (swiperState.animating) {
      return;
    }

    swiperState.slideNext(250, false);
  };

  return (
    <Box>
      <CircleIcon design='transparent' kind='arrowUp' onClick={onPrevProfileClick} />
      <IconDown kind='arrowUp' onClick={onNextProfileClick} />
    </Box>
  );
};
