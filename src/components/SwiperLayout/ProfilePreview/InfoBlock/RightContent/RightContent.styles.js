import styled from 'styled-components';
import { breakpoints } from '../../../../../assets/breakpoints';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 16px;
  bottom: -24px;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;

export const IconWrapper = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  border: 2px solid white;
  background-color: rgba(10, 13, 39, 0.15);
  backdrop-filter: blur(20px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoIconWrapper = styled(IconWrapper)`
  margin-top: 16px;
`;
