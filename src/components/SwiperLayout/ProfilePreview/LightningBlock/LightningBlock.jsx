import React, { useState } from 'react';
import { Modal } from '../../../common/Modal';
import {
  Box,
  IconWrapper,
  LightningIcon,
  Title,
  Description,
  ButtonStyled,
} from './LightningBlock.styles';

export const LightningBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  const onActiveClick = () => console.log('Активировать внимание');

  return (
    <>
      <Box>
        <LightningIcon design='dark' kind='lightning' onClick={onOpenModal} />
      </Box>
      <Modal
        isOpen={isOpenModal}
        desktopModalWidth='400px'
        mobileModalHeight='auto'
        onCancel={onCloseModal}
      >
        <IconWrapper>
          <LightningIcon design='dark' kind='lightning' />
        </IconWrapper>
        <Title>Внимание</Title>
        <Description>
          40 минут ваша анкета будет показываться раньше остальных. Больше людей вас увидят и
          выразят симпатию
        </Description>
        <ButtonStyled type='primary' onClick={onActiveClick}>
          Активировать внимание
        </ButtonStyled>
      </Modal>
    </>
  );
};
