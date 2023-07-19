import React, { useState, useEffect, useCallback } from 'react';
import { Modal as ModalAntd, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useIsDesktop } from '../../../hooks';
import styles from './Modal.module.scss';

export const Modal = ({
  isOpen,
  title,
  children,
  desktopModalWidth,
  mobileModalHeight,
  withDesktopCloseIcon = true,
  withMobileCloseIcon = true,
  onConfirm,
  onCancel,
}) => {
  const [contentEl, setContentEl] = useState(null);
  const [mobileDrawerHeight, setMobileDrawerHeight] = useState(mobileModalHeight);
  const isDesktop = useIsDesktop();

  const elRef = useCallback((node) => {
    if (node !== null) {
      setContentEl(node);
    }
  }, []);

  const closeIcon = (
    <button className={styles['close-icon-wrapper']} type='button' onClick={onCancel}>
      <CloseOutlined style={{ fontSize: '16px' }} />
    </button>
  );

  const titleContent = title && <span className={styles.title}>{title}</span>;

  useEffect(() => {
    const checkHeightContent = () => {
      if (!contentEl || isDesktop) {
        return;
      }

      const viewportHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      const contentHeight = contentEl.clientHeight;

      if (contentHeight >= viewportHeight) {
        setMobileDrawerHeight('100%');
      } else {
        setMobileDrawerHeight(mobileModalHeight);
      }
    };

    checkHeightContent();

    window.addEventListener('resize', checkHeightContent);

    return () => {
      window.removeEventListener('resize', checkHeightContent);
    };
  }, [contentEl, isDesktop, mobileModalHeight]);

  return (
    <>
      {isDesktop && (
        <ModalAntd
          width={desktopModalWidth}
          open={isOpen}
          centered
          footer={null}
          closable={false}
          onOk={onConfirm}
          onCancel={onCancel}
        >
          <div className={styles.header}>
            {titleContent}
            {withDesktopCloseIcon && closeIcon}
          </div>
          {children}
        </ModalAntd>
      )}
      {!isDesktop && (
        <Drawer
          className={styles.drawer}
          bodyStyle={{ padding: 0 }}
          footer={null}
          height={mobileDrawerHeight}
          placement='bottom'
          open={isOpen}
          closable={false}
          onClose={onCancel}
        >
          <div className={styles.header}>
            {titleContent}
            {withMobileCloseIcon && closeIcon}
          </div>
          <div className={styles.content} ref={elRef}>
            {children}
          </div>
        </Drawer>
      )}
    </>
  );
};
