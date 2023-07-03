import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { setScrollToTopProfile } from '../utils';
import { useIsDesktop } from '../../../hooks';
import { swiperStore } from '../store';
import { CustomIcon } from '../../common/CustomIcon';
import { Box, Text } from './TweetButton.styles';

export const TweetButton = observer(({ swiperState, isFromMoreBlock }) => {
  const buttonRef = useRef(null);

  const { currentProfileData, updateProfileData, setMoreInfoStatus } = swiperStore;
  const isDesktop = useIsDesktop();

  const onTweet = () => {
    if (!currentProfileData.id || swiperState.animating) {
      return;
    }

    const execTweet = () => {
      if (!isDesktop) {
        setMoreInfoStatus(true);
        swiperState.enable();
      }

      swiperState.slideNext(250, false);

      setTimeout(() => {
        updateProfileData(currentProfileData.id, { isTweet: true });
      }, 500);
    };

    if (isFromMoreBlock && !isDesktop) {
      setScrollToTopProfile(buttonRef.current, execTweet, 10);
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
