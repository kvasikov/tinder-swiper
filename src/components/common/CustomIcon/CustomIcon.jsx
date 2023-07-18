import React from 'react';
import cn from 'classnames';
import Icon from '@ant-design/icons';
import { ICON_LIST } from './icons';
import styles from './CustomIcon.module.scss';

export const CustomIcon = ({ kind, iconSize = '24px', className, isNoFill = false, ...rest }) => {
  if (!kind) {
    return null;
  }

  const IconSvg = ICON_LIST[kind];
  return (
    <Icon
      component={IconSvg}
      style={{ fontSize: iconSize }}
      className={cn(className, {
        [styles['no-fill']]: isNoFill,
      })}
      {...rest}
    />
  );
};
