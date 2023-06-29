import React from 'react';
import { useSwiper } from 'swiper/react';
import { observer } from 'mobx-react';
import { Badge } from '../../Badge';
import { swiperStore, MAX_DESCRIPTOR_COUNT } from '../../../SwiperLayout/store';
import { Box } from './DescriptorsBlock.styles';

export const DescriptorsBlock = observer(({ profileData }) => {
  const swiper = useSwiper();
  const isShow = profileData.activePhotoIndex >= 1;
  const { currentDescriptorList, isSwiperEnable, setSwiperStatus } = swiperStore;

  if (!isShow || currentDescriptorList.length === 0 || !isSwiperEnable) {
    return null;
  }

  const isShowMoreButton = currentDescriptorList.length > MAX_DESCRIPTOR_COUNT;

  const onInfoClick = () => {
    if (isSwiperEnable) {
      setSwiperStatus(false);
      swiper.disable();
    } else {
      setSwiperStatus(true);
      swiper.enable();
    }
  };

  return (
    <Box>
      {currentDescriptorList
        .filter((_, index) => index < MAX_DESCRIPTOR_COUNT)
        .map((item) => (
          <Badge key={item.id} design='pink' text={item.choiceSelections[0].name} />
        ))}
      {isShowMoreButton && (
        <Badge design='pink-transparent' text='Подробнее' onClick={onInfoClick} />
      )}
    </Box>
  );
});
