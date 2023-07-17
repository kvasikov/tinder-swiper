import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal } from '../../../common/Modal';
import { CircleIcon } from '../../../common/CircleIcon';
import styles from './LightningBlock.module.scss';

export const LightningBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  const onActiveClick = () => console.log('Активировать внимание');

  return (
    <>
      <div className={styles.box}>
        <CircleIcon
          className={styles['lightning-icon']}
          design='dark'
          kind='lightning'
          onClick={onOpenModal}
        />
      </div>
      <Modal
        isOpen={isOpenModal}
        desktopModalWidth='400px'
        mobileModalHeight='auto'
        onCancel={onCloseModal}
      >
        <div className={styles['icon-wrapper']}>
          <CircleIcon className={styles['lightning-icon']} design='dark' kind='lightning' />
        </div>
        <h4 className={styles.title}>Внимание</h4>
        <p className={styles.description}>
          40 минут ваша анкета будет показываться раньше остальных. Больше людей вас увидят и
          выразят симпатию
        </p>
        <Button className={styles.button} type='primary' onClick={onActiveClick}>
          Активировать внимание
        </Button>
      </Modal>
    </>
  );
};
