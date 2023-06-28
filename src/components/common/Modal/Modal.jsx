import React from 'react';
import { Modal as ModalAntd } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { breakpoints } from '../../../assets/breakpoints';
import { useMediaBreakpoint } from '../../../hooks';
import { DrawerStyled, CloseIconWrapper } from './Modal.styles';

export const Modal = ({
  isOpen,
  title,
  children,
  desktopModalWidth,
  mobileModalHeight,
  onConfirm,
  onCancel,
}) => {
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  const closeIcon = (
    <CloseIconWrapper onClick={onCancel}>
      <CloseOutlined style={{ fontSize: '16px' }} />
    </CloseIconWrapper>
  );

  return (
    <>
      {isDesktop && (
        <ModalAntd
          width={desktopModalWidth}
          title={title}
          open={isOpen}
          centered
          footer={null}
          closable={false}
          onOk={onConfirm}
          onCancel={onCancel}
        >
          {closeIcon}
          {children}
        </ModalAntd>
      )}
      {!isDesktop && (
        <DrawerStyled
          bodyStyle={{ padding: '16px' }}
          footer={null}
          title={title}
          height={mobileModalHeight}
          placement='bottom'
          open={isOpen}
          closable={false}
          onClose={onCancel}
        >
          {closeIcon}
          <div>{children}</div>
        </DrawerStyled>
      )}
    </>
  );
};
