import styled from 'styled-components';

export const Box = styled.div`
  height: 100%;
  overflow: ${(props) => !props.$isSwiperEnable && 'auto'};
`;
