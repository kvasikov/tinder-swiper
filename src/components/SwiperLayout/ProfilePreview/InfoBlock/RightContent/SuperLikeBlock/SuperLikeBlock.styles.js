import styled from 'styled-components';
import { Input, Button } from 'antd';
import { CircleIcon } from '../../../../../common/CircleIcon';

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AvatarContent = styled.div`
  position: relative;
  margin-top: 72px;
  width: 88px;
  height: 88px;
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
  font-feature-settings: 'lnum' 1;
`;

export const AvatarIcon = styled(CircleIcon)`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Textarea = styled(Input.TextArea)`
  margin-top: 16px;

  &&& {
    min-height: 147px;
    resize: none;
    font-size: 16px;
  }
`;

export const EventButton = styled(Button)`
  margin-top: 16px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
  margin-bottom: 54px;
  width: 100%;
`;
