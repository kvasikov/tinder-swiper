import styled from 'styled-components';
import { CustomIcon } from '../../common/CustomIcon';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -64px;
    top: 0;
  }
`;

export const IconRotate = styled(CustomIcon)`
  transform: rotate(180deg);
`;

export const ButtonArrow = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;

  &:last-child {
    margin-top: 12px;
  }
`;
