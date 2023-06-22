import styled from 'styled-components';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    z-index: 1;
  }
`;
