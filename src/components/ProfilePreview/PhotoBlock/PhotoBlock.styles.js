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

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
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
  background-color: ${(props) => (props.$isActive ? 'white' : 'rgba(10, 13, 39, 0.2)')};
  width: 100%;
  border-radius: 16px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export const HandlerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 128px; // TODO: считать исходя из высоты (является динамическим) контента с описанием профиля
`;

export const HandlerPhoto = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  width: 50%;
  height: 100%;
`;
