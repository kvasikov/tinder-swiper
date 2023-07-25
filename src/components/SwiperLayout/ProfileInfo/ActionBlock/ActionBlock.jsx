import React, { useState } from 'react';
import { TweetButton } from '../../TweetButton';
import { Modal } from '../../../common/Modal';
import { CustomIcon } from '../../../common/CustomIcon';
import styles from './ActionBlock.module.scss';

const COMPLAIN_LIST = ['Чужие изображения', 'Непристойный контент', 'Непристойные фото', 'Другое'];

const ActionButton = ({ label, onClick }) => {
  return (
    <button className={styles.button} type='button' onClick={onClick}>
      {label}
    </button>
  );
};

export const ActionBlock = ({ profileData }) => {
  const [isShowComplain, setIsShowComplain] = useState(false);

  const openComplainModal = () => setIsShowComplain(true);
  const closeComplainModal = () => setIsShowComplain(false);

  const onShareClick = () => console.log('Поделиться профилем', profileData.id);
  const onBlockClick = () => console.log('Заблокировать', profileData.id);

  const onComplainClick = () => {
    openComplainModal();
  };

  const onComplainItemClick = (complainText) => () => {
    console.log('Пожаловаться', profileData.id, complainText);
    closeComplainModal();
  };

  return (
    <div className={styles.box}>
      <button className={styles['share-wrapper']} type='button' onClick={onShareClick}>
        <CustomIcon className={styles.icon} kind='share' iconSize='24px' />
        <span className={styles['share-text']}>Поделиться профилем</span>
      </button>
      <div className={styles['tweet-button-wrapper']}>
        <TweetButton isFromMoreBlock />
      </div>
      <div className={styles['complain-wrapper']}>
        <ActionButton label='Пожаловаться' onClick={onComplainClick} />
        <ActionButton label='Заблокировать' onClick={onBlockClick} />
      </div>
      <Modal
        title='Пожаловаться'
        isOpen={isShowComplain}
        desktopModalWidth='400px'
        mobileModalHeight='auto'
        onCancel={closeComplainModal}
      >
        <div className={styles['complain-wrapper']}>
          {COMPLAIN_LIST.map((complainText) => (
            <ActionButton
              key={complainText}
              label={complainText}
              onClick={onComplainItemClick(complainText)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};
