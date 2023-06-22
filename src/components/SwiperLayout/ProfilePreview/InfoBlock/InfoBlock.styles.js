import styled from 'styled-components';
import { breakpoints } from '../../../../assets/breakpoints';

export const Box = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  text-align: left;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 16px;
`;

export const TweetButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -56px;

  @media screen and (min-width: ${breakpoints.DESKTOP_S}px) {
    display: none;
  }
`;

export const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 40px;
`;

export const RightWrapper = styled.div``;
