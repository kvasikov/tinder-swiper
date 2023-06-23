import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.$isHide ? '1' : '0')};
  transition: opacity 0.25s;
`;
