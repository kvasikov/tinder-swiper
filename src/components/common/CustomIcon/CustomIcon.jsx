import React from 'react';
import Icon from '@ant-design/icons';
import { ICON_LIST } from './icons';

export const CustomIcon = ({ kind, iconSize = '24px', ...rest }) => {
  if (!kind) {
    return null;
  }

  const IconSvg = ICON_LIST[kind];
  return <Icon component={IconSvg} style={{ fontSize: iconSize }} {...rest} />;
};
