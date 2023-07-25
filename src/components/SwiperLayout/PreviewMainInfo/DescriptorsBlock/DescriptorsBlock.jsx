import React, { useRef } from 'react';
import { useSwiper } from 'swiper/react';
import { useIsDesktop } from '../../../../hooks';
import { setScrollToTopProfile } from '../../utils';
import { Badge } from '../../../common/Badge';
import { swiperStore, MAX_DESCRIPTOR_COUNT } from '../../store';
import styles from './DescriptorsBlock.module.scss';

export const DescriptorsBlock = ({ profileData }) => {
  const contentRef = useRef(null);

  const isDesktop = useIsDesktop();

  const swiper = useSwiper();

  const sectionDataList = profileData?.infoData?.sectionDataList;
  const activePhotoIndex = profileData.activePhotoIndex;
  const activeIndex = activePhotoIndex <= 1 ? 0 : activePhotoIndex - 1;
  let descriptorList = sectionDataList[activeIndex] || [];

  if (descriptorList?.length === 0 || !profileData.isHideMoreProfileInfo) {
    return null;
  }

  const isShowMoreButton = descriptorList.length > MAX_DESCRIPTOR_COUNT;

  const onInfoClick = () => {
    const execHideMoreInfo = () => {
      swiperStore.updateProfileData(profileData.id, { isHideMoreProfileInfo: true });
      !isDesktop && swiper.enable();
    };

    if (profileData.isHideMoreProfileInfo) {
      !isDesktop && swiper.disable();
      swiperStore.updateProfileData(profileData.id, { isHideMoreProfileInfo: false });
    } else {
      setScrollToTopProfile(contentRef.current, execHideMoreInfo);
    }
  };

  return (
    <div className={styles.box} ref={contentRef}>
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
    </div>
  );
};
