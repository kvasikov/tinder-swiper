import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { swiperStore } from '../../../../store';
import { CircleIcon } from '../../../../../common/CircleIcon';
import { Modal } from '../../../../../common/Modal';
import {
  AvatarWrapper,
  AvatarContent,
  Description,
  Title,
  AvatarIcon,
  Avatar,
  Textarea,
  EventButton,
  SubmitButton,
} from './SuperLikeBlock.styles';

export const SuperLikeBlock = observer(() => {
  const { currentProfileData } = swiperStore;
  const firstPhoto = currentProfileData?.infoData?.photoList?.[0];

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
        <AvatarWrapper>
          <AvatarContent>
            <Avatar src={firstPhoto} alt='avatar' />
            <AvatarIcon kind='chat' />
          </AvatarContent>
        </AvatarWrapper>
        <Title>Суперлайк</Title>
        <Description>Отправьте суперлайк, чтобы увеличить шансы на взаимность</Description>
        <Textarea placeholder='Напишите что-нибудь' />
        <EventButton icon={<PlusCircleOutlined />}>Предложить событие или место</EventButton>
        <SubmitButton type='primary'>Отправьте суперлайк</SubmitButton>
      </Modal>
    </div>
  );
});
