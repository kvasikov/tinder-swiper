import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../assets/breakpoints';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Box = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  background: radial-gradient(50% 50% at 120% 15%, #230efc 0%, #1f0c33 100%);
  justify-content: center;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: ${breakpoints.DESKTOP_S - 1}px) {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  height: 100%;

  @media screen and (max-width: ${breakpoints.DESKTOP_S - 1}px) {
    width: 100%;
    overflow: ${(props) => (props.$isSwiperEnable ? 'hidden' : 'auto')};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SideWrapper = styled.div`
  height: ${(props) => props.$isFullHeightMobile && '100%'};
  transition: left 0.25s, transform 0.25s, opacity 0.25s;
  transition-timing-function: steps(100, jump-none);

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    position: relative;
    top: 50%;
    left: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '50%' : '0')};
    transform: ${({ $isSwiperEnable }) =>
      $isSwiperEnable ? 'translateY(-50%) translateX(-50%)' : 'translateY(-50%) translateX(0)'};
    width: 374px;
    height: 100%;
    max-height: 678px;
    border-radius: 16px;
    background-color: white;
    z-index: 2;
  }

  ${(props) =>
    props.$isDesktopInfo
      ? css`
          display: none;

          @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            overflow: auto;
            display: block;
            opacity: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '0' : '1')};
            z-index: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '-1' : '1')};
            margin-right: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '0' : '24px')};
            transform: ${({ $isSwiperEnable }) =>
              $isSwiperEnable
                ? 'translateY(-50%) translateX(-150%)'
                : 'translateY(-50%) translateX(0)'};
          }
        `
      : css`
          @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
            margin-right: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '0' : '4px')};
          }
        `};
`;

export const ButtonWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-height: 678px;
    left: ${({ $isSwiperEnable }) => ($isSwiperEnable ? '-144px' : '0')};
    transition: left 0.25s;
  }
`;

export const Content = styled.div`
  height: 100%;

  @media screen and (max-width: ${breakpoints.DESKTOP_S - 1}px) {
    background-color: white;
    max-width: 600px;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
