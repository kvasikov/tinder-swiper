import React, { useRef } from 'react';
import { useSwiper } from 'swiper/react';
import { observer } from 'mobx-react';
import { useIsDesktop } from '../../../../hooks';
import { setScrollToTopProfile } from '../../utils';
import { Badge } from '../../../common/Badge';
import { swiperStore, MAX_DESCRIPTOR_COUNT } from '../../store';
import { Box } from './DescriptorsBlock.styles';

export const DescriptorsBlock = observer(({ profileData }) => {
  const contentRef = useRef(null);

  const isDesktop = useIsDesktop();

  const swiper = useSwiper();
  const { isHideMoreProfileInfo, setMoreInfoStatus } = swiperStore;

  const sectionDataList = profileData?.infoData?.sectionDataList;
  const activePhotoIndex = profileData.activePhotoIndex;
  const activeIndex = activePhotoIndex <= 1 ? 0 : activePhotoIndex - 1;
  let descriptorList = sectionDataList[activeIndex] || [];

  if (descriptorList?.length === 0 || !isHideMoreProfileInfo) {
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
        .map((item, index) => (
          <Badge
            key={item.id}
            design={index === 0 ? 'pink' : 'dark'} // TODO: pink - когда имеется совпадение с пользователем
            text={item.choiceSelections[0].name}
          />
        ))}
      {isShowMoreButton && (
        <Badge design='pink-transparent' text='Подробнее' onClick={onInfoClick} />
      )}
    </Box>
  );
});
