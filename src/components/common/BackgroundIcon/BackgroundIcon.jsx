import React from 'react';
import cn from 'classnames';
import BackgroundImg from '../../../assets/images/background.png';
import { CustomIcon } from '../CustomIcon';
import styles from './BackgroundIcon.module.scss';

export const BackgroundIcon = ({ iconKind, onClick }) => {
  const isButton = typeof onClick === 'function';

  const Container = isButton ? 'button' : 'span';

  return (
    <Container
      type='button'
      className={cn(styles.box, {
        [styles['box--pointer']]: typeof onClick === 'function',
      })}
      style={{ backgroundImage: `url("${BackgroundImg}")` }}
      onClick={onClick}
    >
      <CustomIcon className={styles.icon} kind={iconKind} iconSize='14px' isNoFill />
    </Container>
  );
};
