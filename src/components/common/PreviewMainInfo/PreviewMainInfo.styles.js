import styled from 'styled-components';
import { CustomIcon } from '../CustomIcon';

export const Box = styled.div`
  color: ${(props) => `${props.$color}`};
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
`;

export const BirthData = styled.span`
  font-size: 24px;
  line-height: 24px;
  margin-left: 10px;
  font-feature-settings: 'lnum' 1;
`;

export const VerifyIcon = styled(CustomIcon)`
  margin-left: 10px;
  color: black;
  position: relative;
  top: 3px;
  opacity: ${(props) => (props.$isShown ? '1' : '0')};
`;
