import styled from 'styled-components';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  background-color: white;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 16px;
  }
`;
