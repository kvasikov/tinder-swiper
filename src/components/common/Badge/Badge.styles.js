import styled from 'styled-components';

const bgColorByDesign = {
  transparent: 'transparent',
  pink: '#FFDFFC',
  'pink-transparent': 'transparent',
  dark: 'rgba(31, 12, 51, 0.60)',
};

const textColorByDesign = {
  transparent: 'black',
  pink: '#FF00D6',
  'pink-transparent': '#FF00D6',
  dark: 'white',
};

const borderColorByDesign = {
  transparent: '#d8d8d8',
  pink: '#FFDFFC',
  'pink-transparent': '#FF00D6',
  dark: 'rgba(31, 12, 51, 0.60)',
};

export const Box = styled.button`
  outline: none;
  appearance: none;
  margin: 0;
  cursor: ${({ onClick }) => typeof onClick === 'function' && 'pointer'};
  background-color: ${({ $design }) => bgColorByDesign[$design]};
  color: ${({ $design }) => textColorByDesign[$design]};
  border: ${({ $design }) => `1px solid ${borderColorByDesign[$design]}`};
  backdrop-filter: blur(12.5px);
  border-radius: 16px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 2px 12px;
  display: inline-block;
`;
