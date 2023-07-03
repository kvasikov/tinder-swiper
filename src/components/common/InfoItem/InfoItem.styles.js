import styled from 'styled-components';

export const Box = styled.div`
  margin: 24px 0;
`;

export const Title = styled.p`
  padding: 0;
  margin: 0 0 8px 0;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const WrapperContent = styled.div`
  > *:not(:first-child) {
    margin-left: 8px;
  }
`;
