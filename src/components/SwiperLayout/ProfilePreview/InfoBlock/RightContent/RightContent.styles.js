import styled from 'styled-components';
import { CircleIcon } from '../../../../common/CircleIcon';
import { breakpoints } from '../../../../../assets/breakpoints';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: -24px;
  z-index: 10;
`;

export const MoreInfoIcon = styled(CircleIcon)`
  margin-top: 16px;
  position: relative;
  top: ${(props) => (props.$isShowMoreProfileInfo ? 0 : '36px')};
  transform: ${(props) => !props.$isShowMoreProfileInfo && 'rotate(-180deg)'};
  transition: transform 0.25s, top 0.25s, background-color 0.25s;
  background-color: ${(props) => !props.$isShowMoreProfileInfo && '#ff00d6'};

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    transform: ${(props) => (props.$isShowMoreProfileInfo ? 'rotate(90deg)' : 'rotate(270deg)')};
    top: 0;
  }
`;
