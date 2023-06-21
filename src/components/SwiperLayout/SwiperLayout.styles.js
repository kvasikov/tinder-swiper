import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints';

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
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SideWrapper = styled.div`
  height: ${(props) => props.$isFullHeightMobile && '100%'};

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 375px;
    height: 100%;
    max-height: 678px;
    border-radius: 16px;
    background-color: white;
    overflow: hidden;
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

    ${SideWrapper}:first-child {
      margin-right: 4px;
    }

    ${SideWrapper}:last-child {
      margin-left: 4px;
    }
  }
`;
