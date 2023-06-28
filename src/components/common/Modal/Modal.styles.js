import styled from 'styled-components';
import { Drawer } from 'antd';

export const DrawerStyled = styled(Drawer)`
  border-radius: 16px 16px 0px 0px;
`;

export const CloseIconWrapper = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  background: rgba(151, 164, 211, 0.1);
  color: #0a0d27;
  padding: 8px;
  border-radius: 100%;
  top: 16px;
`;

export const Content = styled.div`
  padding: 16px;
`;
