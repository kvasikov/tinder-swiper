import React from 'react';
import { Box, Title, Text } from './InfoItem.styles';

export const InfoItem = ({ title, text, children }) => {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
      {children}
    </Box>
  );
};
