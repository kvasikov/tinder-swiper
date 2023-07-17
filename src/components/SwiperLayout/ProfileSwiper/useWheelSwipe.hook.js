import { useEffect } from 'react';
import { useIsDesktop } from '../../../hooks';
import { throttle } from '../../../utils';

export const useWheelSwipe = ({ swiperState, wrapperEl }) => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const onMouseWheel = (event) => {
      if (swiperState.animating) {
        return;
      }

      if (event.deltaY < 0) {
        swiperState.slidePrev(400, false);
      } else if (event.deltaY > 0) {
        swiperState.slideNext(400, false);
      }
    };

    if (!swiperState || !wrapperEl) {
      return;
    }

    const execMouseWheel = throttle(onMouseWheel, 1000);

    if (!isDesktop) {
      return () => {
        wrapperEl?.removeEventListener('wheel', execMouseWheel);
      };
    }

    wrapperEl.addEventListener('wheel', execMouseWheel);

    return () => {
      wrapperEl?.removeEventListener('wheel', execMouseWheel);
    };
  }, [isDesktop, swiperState, wrapperEl]);
};
