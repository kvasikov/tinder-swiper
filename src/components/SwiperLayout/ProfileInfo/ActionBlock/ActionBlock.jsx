import React, { useState } from 'react';
import { TweetButton } from '../../../common/TweetButton';
import { Modal } from '../../../common/Modal';
import {
  Box,
  ShareWrapper,
  IconStyled,
  ShareText,
  TweetButtonWrapper,
  ComplainWrapper,
  Button,
} from './ActionBlock.styles';

const COMPLAIN_LIST = ['Чужие изображения', 'Непристойный контент', 'Непристойные фото', 'Другое'];

const ActionButton = ({ label, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      {label}
    </Button>
  );
};

export const ActionBlock = ({ profileData, swiperState }) => {
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
    <Box>
      <ShareWrapper onClick={onShareClick}>
        <IconStyled kind='share' iconSize='24px' />
        <ShareText>Поделиться профилем</ShareText>
      </ShareWrapper>
      <TweetButtonWrapper>
        <TweetButton swiperState={swiperState} isFromMoreBlock />
      </TweetButtonWrapper>
      <ComplainWrapper>
        <ActionButton label='Пожаловаться' onClick={onComplainClick} />
        <ActionButton label='Заблокировать' onClick={onBlockClick} />
      </ComplainWrapper>
      <Modal
        title='Пожаловаться'
        isOpen={isShowComplain}
        desktopModalWidth='400px'
        mobileModalHeight='auto'
        onCancel={closeComplainModal}
      >
        <ComplainWrapper>
          {COMPLAIN_LIST.map((complainText) => (
            <ActionButton
              key={complainText}
              label={complainText}
              onClick={onComplainItemClick(complainText)}
            />
          ))}
        </ComplainWrapper>
      </Modal>
    </Box>
  );
};
