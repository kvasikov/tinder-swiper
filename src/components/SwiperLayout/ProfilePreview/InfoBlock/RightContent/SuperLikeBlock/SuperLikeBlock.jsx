import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { swiperStore } from '../../../../store';
import { CircleIcon } from '../../../../../common/CircleIcon';
import { Modal } from '../../../../../common/Modal';
import styles from './SuperLikeBlock.module.scss';

export const SuperLikeBlock = observer(() => {
  const firstPhoto = swiperStore.currentProfileData?.infoData?.photoList?.[0];

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return (
    <div>
      <CircleIcon kind='chat' onClick={onOpenModal} />
      <Modal
        isOpen={isOpenModal}
        desktopModalWidth='400px'
        mobileModalHeight='auto'
        onCancel={onCloseModal}
      >
        <div className={styles['avatar-wrapper']}>
          <div className={styles['avatar-content']}>
            <img className={styles['avatar-img']} src={firstPhoto} alt='avatar' />
            <CircleIcon className={styles['avatar-icon']} kind='chat' />
          </div>
        </div>
        <h4 className={styles.title}>Суперлайк</h4>
        <p className={styles.description}>
          Отправьте суперлайк, чтобы увеличить шансы на взаимность
        </p>
        <Input.TextArea className={styles.textarea} placeholder='Напишите что-нибудь' />
        <Button className={styles['event-button']} icon={<PlusCircleOutlined />}>
          Предложить событие или место
        </Button>
        <Button className={styles['submit-button']} type='primary'>
          Отправьте суперлайк
        </Button>
      </Modal>
    </div>
  );
});
