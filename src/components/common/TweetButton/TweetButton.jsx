import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { breakpoints } from '../../../assets/breakpoints';
import { DATA_ATTR_PROFILE_WRAPPER_ID } from '../../../constants/attributes';
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
      swiperState.slideNext(250, false);

      setTimeout(() => {
        updateProfileData(currentProfileData.id, { isTweet: true });
      }, 500);
    };

    if (isFromMoreBlock && !isDesktop) {
      const wrapperEl = buttonRef.current.closest(`[${DATA_ATTR_PROFILE_WRAPPER_ID}]`);
      wrapperEl.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setMoreInfoStatus(true);
        swiperState.enable();

        execTweet();
      }, 350);
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
