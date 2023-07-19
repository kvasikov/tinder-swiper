import React, { useState } from 'react';
import cn from 'classnames';
import { CustomIcon } from '../../../../../common/CustomIcon';
import { Modal } from '../../../../../common/Modal';
import styles from './CategoriesBlock.module.scss';

const CATEGORIES_LIST = [
  {
    key: '1',
    label: 'Любовь',
    iconKind: 'heartOutline',
  },
  {
    key: '2',
    label: 'Путешествия',
    iconKind: 'plain',
  },
  {
    key: '3',
    label: 'Хобби',
    iconKind: 'stars',
  },
  {
    key: '4',
    label: 'Развлечения',
    iconKind: 'hobby',
  },
  {
    key: '5',
    label: 'Спорт',
    iconKind: 'sport',
  },
  {
    key: '6',
    label: 'Волонтерство',
    iconKind: 'help',
  },
  {
    key: '7',
    label: 'IT и технологии',
    iconKind: 'it',
  },
  {
    key: '8',
    label: 'Игры и киберспорт',
    iconKind: 'game',
  },
  {
    key: '9',
    label: 'Развитие и менторство',
    iconKind: 'mentorship',
  },
  {
    key: '10',
    label: 'Бизнес и работа',
    iconKind: 'charts',
  },
  {
    key: '11',
    label: 'Недвижимость',
    iconKind: 'home',
  },
];

export const CategoriesBlock = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button type='button' className={styles.categories} onClick={() => setIsShowModal(true)}>
        <CustomIcon className={styles.plain} kind='plain' iconSize='16px' isNoFill />
      </button>
      <Modal
        isOpen={isShowModal}
        onCancel={() => setIsShowModal(false)}
        desktopModalWidth='375px'
        mobileModalHeight='auto'
        withDesktopCloseIcon={false}
        title='Выберите категорию'
      >
        <div className={styles.category}>
          {CATEGORIES_LIST.map((category, index) => {
            const IS_ACTIVE = index === 2; // TODO: заглушка

            return (
              <button
                key={category.key}
                className={cn(styles['category__item'], {
                  [styles['category__item--active']]: IS_ACTIVE,
                })}
                type='button'
              >
                <CustomIcon kind={category.iconKind} iconSize='24px' isNoFill />
                <span className={styles['category__item-label']}>{category.label}</span>
                {IS_ACTIVE && (
                  <CustomIcon className={styles.success} kind='success' iconSize='16px' isNoFill />
                )}
              </button>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
