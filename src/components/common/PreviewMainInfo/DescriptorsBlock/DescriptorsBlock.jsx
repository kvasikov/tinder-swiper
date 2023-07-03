import React, { useRef } from 'react';
import { useSwiper } from 'swiper/react';
import { observer } from 'mobx-react';
import { breakpoints } from '../../../../assets/breakpoints';
import { useMediaBreakpoint } from '../../../../hooks';
import { setScrollToTopProfile } from '../../../SwiperLayout/utils';
import { Badge } from '../../Badge';
import { swiperStore, MAX_DESCRIPTOR_COUNT } from '../../../SwiperLayout/store';
import { Box } from './DescriptorsBlock.styles';

export const DescriptorsBlock = observer(({ profileData }) => {
  const contentRef = useRef(null);

  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);
  const isShow = profileData.activePhotoIndex >= 1 && profileData.activePhotoIndex <= 2;

  const swiper = useSwiper();
  const { isHideMoreProfileInfo, setMoreInfoStatus } = swiperStore;

  const sectionDataList = profileData?.infoData?.sectionDataList;
  const activePhotoIndex = profileData.activePhotoIndex;
  const index = activePhotoIndex <= 1 ? 0 : activePhotoIndex - 1;
  let descriptorList = sectionDataList[index] || [];

  if (!isShow || descriptorList?.length === 0 || !isHideMoreProfileInfo) {
    return null;
  }

  const isShowMoreButton = descriptorList.length > MAX_DESCRIPTOR_COUNT;

  const onInfoClick = () => {
    const execHideMoreInfo = () => {
      setMoreInfoStatus(true);
      !isDesktop && swiper.enable();
    };

    if (isHideMoreProfileInfo) {
      setMoreInfoStatus(false);
      !isDesktop && swiper.disable();
    } else {
      setScrollToTopProfile(contentRef.current, execHideMoreInfo);
    }
  };

  return (
    <Box ref={contentRef}>
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
