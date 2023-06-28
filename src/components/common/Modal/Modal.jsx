import React from 'react';
import { Modal as ModalAntd } from 'antd';
import { breakpoints } from '../../../assets/breakpoints';
import { useMediaBreakpoint } from '../../../hooks';
import { DrawerStyled } from './Modal.styles';

export const Modal = ({ isOpen, title, children, onConfirm, onCancel }) => {
  const isDesktop = useMediaBreakpoint(breakpoints.DESKTOP_S);

  return (
    <>
      {isDesktop && (
        <ModalAntd
          title={title}
          open={isOpen}
          centered
          footer={null}
          closable={false}
          onOk={onConfirm}
          onCancel={onCancel}
        >
          {children}
        </ModalAntd>
      )}
      {!isDesktop && (
        <DrawerStyled
          bodyStyle={{ padding: 0 }}
          footer={null}
          title={title}
          placement='bottom'
          open={isOpen}
          closable={false}
          onClose={onCancel}
        >
          {children}
        </DrawerStyled>
      )}
    </>
  );
};
