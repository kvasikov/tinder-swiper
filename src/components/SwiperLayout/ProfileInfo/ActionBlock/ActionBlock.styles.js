import styled from 'styled-components';
import { CustomIcon } from '../../../common/CustomIcon';

export const Box = styled.div`
  margin-bottom: 54px;
  margin-top: 24px;
`;

export const ShareWrapper = styled.button`
  color: #ff00d6;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  outline: none;
  appearance: none;
  margin: 0;
  border: none;
  cursor: pointer;
`;

export const ShareText = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-left: 16px;
`;

export const IconStyled = styled(CustomIcon)`
  svg {
    fill: none;
  }
`;

export const TweetButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const ComplainWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  appearance: none;
  margin: 0;
  border: none;
  cursor: pointer;
  color: #d90026;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;
