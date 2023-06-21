import styled from 'styled-components';

export const Box = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 8px;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;

  svg {
    fill: none;
  }
`;
