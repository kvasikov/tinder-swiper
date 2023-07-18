import React, { useRef } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import { useSwiper } from 'swiper/react';
import { CircleIcon } from '../../../../common/CircleIcon';
import { setScrollToTopProfile } from '../../../utils';
import { useIsDesktop } from '../../../../../hooks';
import { swiperStore } from '../../../store';
import { SuperLikeBlock } from './SuperLikeBlock';
import styles from './RightContent.module.scss';

export const RightContent = observer(() => {
  const contentRef = useRef(null);

  const swiper = useSwiper();
  const isDesktop = useIsDesktop();

  const onInfoClick = () => {
    const execHideMoreInfo = () => {
      swiperStore.setMoreInfoStatus(true);
      !isDesktop && swiper.enable();
    };

    if (swiperStore.isHideMoreProfileInfo) {
      swiperStore.setMoreInfoStatus(false);
      !isDesktop && swiper.disable();
    } else {
      setScrollToTopProfile(contentRef.current, execHideMoreInfo);
    }
  };

  return (
    <div className={styles.box} ref={contentRef}>
      <SuperLikeBlock />
      <CircleIcon
        className={cn(styles['more-info-icon'], {
          [styles['more-info-icon--show']]: !swiperStore.isHideMoreProfileInfo,
        })}
        kind='arrowUp'
        onClick={onInfoClick}
      />
    </div>
  );
});
