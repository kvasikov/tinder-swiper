import React from 'react';
import { observer } from 'mobx-react';
import { swiperStore } from '../../SwiperLayout/store';
import { CustomIcon } from '../CustomIcon';
import { Box, Text } from './TweetButton.styles';

export const TweetButton = observer(({ swiperState }) => {
  const { currentProfileData, updateProfileData } = swiperStore;

  const onTweet = () => {
    if (!currentProfileData.id || swiperState.animating) {
      return;
    }

    swiperState.slideNext(250, false);

    setTimeout(() => {
      updateProfileData(currentProfileData.id, { isTweet: true });
    }, 500);
  };

  return (
    <Box onClick={onTweet}>
      <CustomIcon kind='tweet' />
      <Text>Tweet</Text>
    </Box>
  );
});
