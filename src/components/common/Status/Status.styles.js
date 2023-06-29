import styled from 'styled-components';
import { CustomIcon } from '../CustomIcon';

const borderColorByDesign = {
  pink: '#ff00d6',
  yellow: '#FFB800',
  purple: '#DB00FF',
  green: '#18D870',
  blue: '#0500FF',
  orange: '#FF7A00',
};

const bgColorByDesign = {
  pink: 'rgba(255, 0, 214, 0.1)',
  yellow: 'rgba(255, 122, 0, 0.1)',
  purple: 'rgba(189, 0, 255, 0.1)',
  green: 'rgba(24, 216, 112, 0.1)',
  blue: 'rgba(0, 10, 255, 0.1)',
  orange: 'rgba(255, 122, 0, 0.1)',
};

export const Box = styled.div`
  color: #06090c;
  border-radius: 24px;
  border: ${({ $design }) => `2px solid ${borderColorByDesign[$design]}`};
  background-color: ${({ $design }) => bgColorByDesign[$design]};
  backdrop-filter: blur(50px);
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding: 8px 16px;
`;

export const IconStyled = styled(CustomIcon)`
  margin-right: 8px;
`;
