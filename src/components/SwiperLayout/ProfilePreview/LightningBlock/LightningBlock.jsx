import React, { useState } from 'react';
import { CustomIcon } from '../../../common/CustomIcon';
import { Modal } from '../../../common/Modal';
import { Box } from './LightningBlock.styles';

export const LightningBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <Box type='button' onClick={onOpenModal}>
        <CustomIcon kind='lightning' />
      </Box>
      <Modal isOpen={isOpenModal} onCancel={onCloseModal}>
        <div>content</div>
      </Modal>
    </>
  );
};
