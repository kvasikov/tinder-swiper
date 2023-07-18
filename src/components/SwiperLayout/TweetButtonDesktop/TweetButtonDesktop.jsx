import React, { useRef, useEffect, useState } from 'react';
import { TweetButton } from '../TweetButton';
import styles from './TweetButtonDesktop.module.scss';

export const TweetButtonDesktop = ({ swiperState }) => {
  const wrapperRef = useRef(null);
  const [offsetBottom, setOffsetBottom] = useState(0);

  // TODO: подумать над другим решением. Работает не идеально
  // Иногда при ресайзе кнопка может немного выйти за пределы viewport
  useEffect(() => {
    const execResize = () => {
      setTimeout(() => {
        const rect = wrapperRef.current?.getBoundingClientRect();

        if (typeof rect.bottom !== 'number') {
          return;
        }

        const diffHeight = rect.bottom - window.innerHeight;
        setOffsetBottom(diffHeight >= 0 ? diffHeight : 0);
      }, 500);
    };

    execResize();

    window.addEventListener('resize', execResize);

    return () => {
      window.removeEventListener('resize', execResize);
    };
  }, []);

  return (
    <div className={styles.box} ref={wrapperRef} style={{ marginBottom: `${offsetBottom}px` }}>
      <TweetButton swiperState={swiperState} />
    </div>
  );
};
