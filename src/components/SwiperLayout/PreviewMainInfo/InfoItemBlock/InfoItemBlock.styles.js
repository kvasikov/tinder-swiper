import styled from 'styled-components';
import { CustomIcon } from '../../../common/CustomIcon';

export const InfoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const InfoWrapper = styled.div`
  margin-top: 8px;

  ${InfoItemWrapper}:not(:first-child) {
    margin-top: 4px;
  }
`;

export const InfoItemText = styled.span`
  color: ${(props) => `${props.$color}`};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-left: 8px;
  font-feature-settings: 'lnum' 1;
`;

export const IconStyled = styled(CustomIcon)`
  color: ${(props) => `${props.$color}`};

  svg {
    fill: none;
  }
`;

export const OnlineIcon = styled.div`
  background-color: #40f700;
  height: 8px;
  width: 8px;
  border-radius: 100%;
`;
