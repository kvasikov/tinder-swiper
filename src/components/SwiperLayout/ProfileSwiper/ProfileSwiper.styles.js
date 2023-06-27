import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { Space } from 'antd';
import { fadeIn } from '../SwiperLayout.styles';
import { breakpoints } from '../../../assets/breakpoints';

export const SpaceStyled = styled(Space)`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  animation-name: ${fadeIn};
  animation-iteration-count: 1;
  animation-duration: 0.25s;
`;

export const SwiperWrapper = styled.div`
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    border-radius: 16px;
  }
`;

export const LastLoaderWrapper = styled.div`
  position: relative;
  top: 8px;
  width: 100%;
  z-index: 1;
  text-align: center;
`;
