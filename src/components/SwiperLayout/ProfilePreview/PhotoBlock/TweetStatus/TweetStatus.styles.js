import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  left: 16px;
  top: 22px;
  color: ${({ $isSuccess }) => ($isSuccess ? '#3db812' : '#f10d5f')};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: inline-flex;
  transform: rotate(-15deg);
  padding: 12px;
  border-radius: 24px;
  border: 2px solid ${({ $isSuccess }) => ($isSuccess ? '#3db812' : '#f10d5f')};
  backdrop-filter: blur(50px);
  text-transform: uppercase;
`;
