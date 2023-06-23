import styled from 'styled-components';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  background-color: white;
  padding: 16px;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 16px;
  }
`;
