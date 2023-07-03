import React, { useState, useEffect, useCallback } from 'react';
import { Modal as ModalAntd } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useIsDesktop } from '../../../hooks';
import { DrawerStyled, CloseIconWrapper, Content, Title } from './Modal.styles';

export const Modal = ({
  isOpen,
  title,
  children,
  desktopModalWidth,
  mobileModalHeight,
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
    <CloseIconWrapper onClick={onCancel}>
      <CloseOutlined style={{ fontSize: '16px' }} />
    </CloseIconWrapper>
  );

  const titleContent = title && <Title>{title}</Title>;

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
          {titleContent}
          {closeIcon}
          {children}
        </ModalAntd>
      )}
      {!isDesktop && (
        <DrawerStyled
          bodyStyle={{ padding: 0 }}
          footer={null}
          height={mobileDrawerHeight}
          placement='bottom'
          open={isOpen}
          closable={false}
          onClose={onCancel}
        >
          {titleContent}
          {closeIcon}
          <Content ref={elRef}>{children}</Content>
        </DrawerStyled>
      )}
    </>
  );
};
