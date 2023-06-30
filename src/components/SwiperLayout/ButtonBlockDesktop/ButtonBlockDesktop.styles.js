import styled from 'styled-components';
import { CircleIcon } from '../../common/CircleIcon';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IconDown = styled(CircleIcon)`
  transform: rotate(180deg);
  margin-top: 12px;
`;
