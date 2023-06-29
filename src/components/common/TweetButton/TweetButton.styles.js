import styled from 'styled-components';

export const Box = styled.button`
  outline: none;
  appearance: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 12px;
  background-color: black;
  border: 2px solid white;
  border-radius: 24px;
  min-height: 40px;
  color: white;
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  line-height: 18px;
  color: white;
  margin-left: 8px;
`;
