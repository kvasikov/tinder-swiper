import React, { useState } from 'react';
import { CircleIcon } from '../../../common/CircleIcon';
import { Modal } from '../../../common/Modal';
import { Box } from './LightningBlock.styles';

export const LightningBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <Box>
        <CircleIcon design='dark' kind='lightning' onClick={onOpenModal} />
      </Box>
      <Modal isOpen={isOpenModal} onCancel={onCloseModal}>
        <div>content</div>
      </Modal>
    </>
  );
};
