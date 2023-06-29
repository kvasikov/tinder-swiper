import styled from 'styled-components';
import { breakpoints } from '../../../assets/breakpoints';
import { CustomIcon } from '../CustomIcon';

export const Box = styled.div`
  color: ${(props) => `${props.$color}`};

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: ${(props) => props.$isShownMobile && 'none'};
  }
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
