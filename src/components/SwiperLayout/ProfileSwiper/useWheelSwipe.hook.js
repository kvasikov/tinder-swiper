import { useEffect } from 'react';
import { throttle } from '../../../utils';

export const useWheelSwipe = ({ swiperState, wrapperEl }) => {
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

    wrapperEl.addEventListener('wheel', execMouseWheel);

    return () => {
      wrapperEl?.removeEventListener('wheel', execMouseWheel);
    };
  }, [swiperState, wrapperEl]);
};
