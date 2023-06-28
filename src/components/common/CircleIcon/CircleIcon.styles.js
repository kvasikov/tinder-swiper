import styled from 'styled-components';

const bgColorByDesign = {
  light: 'rgba(10, 13, 39, 0.15)',
  dark: 'black',
  transparent: 'transparent',
};

export const Box = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  cursor: ${({ onClick }) => typeof onClick === 'function' && 'pointer'};
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background-color: ${({ $design }) => bgColorByDesign[$design]};
  backdrop-filter: blur(20px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
`;
