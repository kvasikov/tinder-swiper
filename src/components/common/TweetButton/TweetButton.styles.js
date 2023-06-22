import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 8px 12px;
  background-color: black;
  border: 2px solid white;
  border-radius: 24px;
  min-height: 40px;
`;

export const Button = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  line-height: 18px;
  color: white;
  margin-left: 8px;
`;
