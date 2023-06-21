import styled from 'styled-components';
import { breakpoints } from '../../../assets/breakpoints';

export const Box = styled.div`
  height: 100%;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    top: 100%;
    transform: translateY(-100%);
  }
`;

export const PhotoImg = styled.div`
  width: 100%;
  height: 577px;
  max-height: 100%;
  background-image: ${(props) => props.$imgPath && `url("${props.$imgPath}")`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

export const BulletListWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 8px;
  left: 16px;
  right: 16px;
`;

export const Bullet = styled.div`
  height: 2px;
  background-color: white;
  width: 100%;
  border-radius: 16px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;
