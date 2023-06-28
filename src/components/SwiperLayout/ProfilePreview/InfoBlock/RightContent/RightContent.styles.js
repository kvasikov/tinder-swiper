import styled from 'styled-components';
import { CircleIcon } from '../../../../common/CircleIcon';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: -24px;
`;

export const MoreInfoIcon = styled(CircleIcon)`
  margin-top: 16px;
  position: relative;
  top: ${(props) => (props.$isSwiperEnable ? 0 : '36px')};
  transform: ${(props) => !props.$isSwiperEnable && 'rotate(-180deg)'};
  transition: transform 0.25s, top 0.25s, background-color 0.25s;
  background-color: ${(props) => !props.$isSwiperEnable && '#ff00d6'};
`;
