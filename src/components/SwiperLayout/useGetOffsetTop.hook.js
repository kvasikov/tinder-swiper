import { useEffect, useRef } from 'react';
import { swiperStore } from '../../store';

export const useGetOffsetTop = ({ currentProfileDataId }) => {
  const { setOffsetTop } = swiperStore;

  const wrapperRef = useRef(null);

  // вычисляем размер отступа для открытия информации профиля
  useEffect(() => {
    const execGetOffsetTop = () => {
      if (!wrapperRef.current) {
        return;
      }

      const viewportHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );

      const actualPhotoWrapper = wrapperRef.current.querySelector(
        `[data-photo-wrapper-id="${currentProfileDataId}"]`,
      );

      if (!actualPhotoWrapper) {
        return;
      }

      const offsetTop = (viewportHeight - actualPhotoWrapper.clientHeight) / 2;
      setOffsetTop(offsetTop);
    };

    execGetOffsetTop();

    window.addEventListener('resize', execGetOffsetTop);

    return () => {
      window.addEventListener('resize', execGetOffsetTop);
    };
  }, [currentProfileDataId, setOffsetTop]);

  return { wrapperRef };
};
