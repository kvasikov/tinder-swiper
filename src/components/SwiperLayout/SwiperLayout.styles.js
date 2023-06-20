import styled from 'styled-components';
import { breakpoints } from '../../assets/breakpoints';

export const Box = styled.div`
  background-color: #1f0c33;
  background-blend-mode: darken;
  height: 100vh;
`;

export const SideWrapper = styled.div`
  max-width: 540px;
  min-width: 320px;
  max-height: 678px;
  width: 100%;
  background-color: white;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    width: 375px;
    border-radius: 16px;
  }
`;

export const ProfileWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    ${SideWrapper}:first-child {
      margin-right: 4px;
    }

    ${SideWrapper}:last-child {
      margin-left: 4px;
    }
  }
`;
