import styled from 'styled-components';
import { Button } from 'antd';
import { CircleIcon } from '../../../common/CircleIcon';

export const LightningIcon = styled(CircleIcon)`
  svg {
    fill: none;
  }
`;

export const Box = styled.div`
  position: absolute;
  right: 16px;
  top: 8px;
`;

export const IconWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  margin-top: 40px;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: #0a0d27;
`;

export const Description = styled.p`
  padding: 0;
  text-align: center;
  margin-top: 16px;
  color: #0a0d27;
  font-size: 17px;
  line-height: 24px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 40px;
  margin-bottom: 54px;
  width: 100%;
`;
