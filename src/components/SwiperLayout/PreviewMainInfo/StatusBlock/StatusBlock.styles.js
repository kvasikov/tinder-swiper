import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  margin: ${({ $isHideMoreProfileInfo }) => ($isHideMoreProfileInfo ? '8px 0 0 0' : '24px 0')};
  transition: margin 0.25s;
`;
