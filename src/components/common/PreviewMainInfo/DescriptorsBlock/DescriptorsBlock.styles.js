import styled from 'styled-components';
import { breakpoints } from '../../../../assets/breakpoints';

export const Box = styled.div`
  margin-top: 8px;
  gap: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;
