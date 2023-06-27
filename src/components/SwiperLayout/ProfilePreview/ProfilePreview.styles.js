import styled from 'styled-components';
import { fadeIn } from '../SwiperLayout.styles';

export const Box = styled.div`
  height: 100%;
  overflow: ${(props) => !props.$isSwiperEnable && 'auto'};
  animation-name: ${fadeIn};
  animation-iteration-count: 1;
  animation-duration: 0.25s;
`;
