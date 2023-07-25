import { useEffect } from 'react';
import { useIsDesktop } from '../../../hooks';
import { throttle } from '../../../utils';

export const useWheelSwipe = ({
  swiperState,
  wrapperEl,
  isHideMoreProfileInfo,
  activeTabValue,
}) => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const onMouseWheel = (event) => {
      if (swiperState.animating) {
        return;
      }

      if (event.deltaY < 0) {
        swiperState.slidePrev(250, false);
      } else if (event.deltaY > 0) {
        swiperState.slideNext(250, false);
      }
    };

    if (!swiperState || !wrapperEl) {
      return;
    }

    const execMouseWheel = throttle(onMouseWheel, 1000);

    if ((!isDesktop && !isHideMoreProfileInfo) || activeTabValue !== 'profile') {
      wrapperEl?.removeEventListener('wheel', execMouseWheel);
      return;
    }

    wrapperEl.addEventListener('wheel', execMouseWheel);

    return () => {
      wrapperEl?.removeEventListener('wheel', execMouseWheel);
    };
  }, [swiperState, wrapperEl, isDesktop, isHideMoreProfileInfo, activeTabValue]);
};
