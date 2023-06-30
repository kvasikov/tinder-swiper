import React from 'react';
import { useSwiper } from 'swiper/react';
import { observer } from 'mobx-react';
import { Badge } from '../../Badge';
import { swiperStore, MAX_DESCRIPTOR_COUNT } from '../../../SwiperLayout/store';
import { Box } from './DescriptorsBlock.styles';

export const DescriptorsBlock = observer(({ profileData }) => {
  const isShow = profileData.activePhotoIndex >= 1 && profileData.activePhotoIndex <= 2;

  const swiper = useSwiper();
  const { isShowMoreProfileInfo, setMoreInfoStatus } = swiperStore;

  const sectionDataList = profileData?.infoData?.sectionDataList;
  const activePhotoIndex = profileData.activePhotoIndex;
  const index = activePhotoIndex <= 1 ? 0 : activePhotoIndex - 1;
  let descriptorList = sectionDataList[index] || [];

  if (!isShow || descriptorList?.length === 0 || !isShowMoreProfileInfo) {
    return null;
  }

  const isShowMoreButton = descriptorList.length > MAX_DESCRIPTOR_COUNT;

  const onInfoClick = () => {
    if (isShowMoreProfileInfo) {
      setMoreInfoStatus(false);
      swiper.disable();
    } else {
      setMoreInfoStatus(true);
      swiper.enable();
    }
  };

  return (
    <Box>
      {descriptorList
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
