import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { breakpoints } from '../../../assets/breakpoints';
import { setScrollToTopProfile } from '../../SwiperLayout/utils';
import { useMediaBreakpoint } from '../../../hooks';
import { swiperStore } from '../../SwiperLayout/store';
import { CustomIcon } from '../CustomIcon';
import { Box, Text } from './TweetButton.styles';

export const TweetButton = observer(({ swiperState, isFromMoreBlock }) => {
  const buttonRef = useRef(null);

  const { currentProfileData, updateProfileData, setMoreInfoStatus } = swiperStore;
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const onTweet = () => {
    if (!currentProfileData.id || swiperState.animating) {
      return;
    }

    const execTweet = () => {
      if (!isDesktop) {
        setMoreInfoStatus(true);
        swiperState.enable();
      }

      swiperState.slideNext(500, false);

      setTimeout(() => {
        updateProfileData(currentProfileData.id, { isTweet: true });
      }, 500);
    };

    if (isFromMoreBlock && !isDesktop) {
      setScrollToTopProfile(buttonRef.current, execTweet);
      return;
    }

    execTweet();
  };

  return (
    <Box ref={buttonRef} onClick={onTweet}>
      <CustomIcon kind='tweet' />
      <Text>Tweet</Text>
    </Box>
  );
});
