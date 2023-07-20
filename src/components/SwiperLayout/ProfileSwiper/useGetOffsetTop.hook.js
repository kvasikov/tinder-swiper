import { useEffect, useRef } from 'react';
import { DATA_ATTR_PHOTO_WRAPPER_ID } from '../../../constants/attributes';
import { swiperStore } from '../store';

export const useGetOffsetTop = ({ currentProfileDataId }) => {
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
        `[${DATA_ATTR_PHOTO_WRAPPER_ID}="${currentProfileDataId}"]`,
      );

      if (!actualPhotoWrapper) {
        return;
      }

      // сначала вычисляем положение сверху
      const offsetTop = (viewportHeight - actualPhotoWrapper.clientHeight) / 2;
      swiperStore.setOffsetData({
        top: offsetTop,
      });

      // ждем применения положения сверху и высчитываем нижнюю границу
      setTimeout(() => {
        const rect = actualPhotoWrapper.getBoundingClientRect();
        swiperStore.setOffsetData({
          bottom: rect.bottom,
        });
      }, 250);
    };

    execGetOffsetTop();

    window.addEventListener('resize', execGetOffsetTop);

    return () => {
      window.removeEventListener('resize', execGetOffsetTop);
    };
  }, [currentProfileDataId]);

  return { wrapperRef };
};
