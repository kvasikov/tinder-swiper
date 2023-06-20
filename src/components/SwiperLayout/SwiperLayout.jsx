import React from 'react';
import { ProfilePreivew } from '../ProfilePreivew';
import { ProfileInfo } from '../ProfileInfo';
import { Box, Wrapper, Container, Content, SideWrapper } from './SwiperLayout.styles';

export const SwiperLayout = () => {
  return (
    <Box>
      <Wrapper>
        <Container>
          <Content>
            <SideWrapper>
              <ProfilePreivew />
            </SideWrapper>
            <SideWrapper>
              <ProfileInfo />
            </SideWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Box>
  );
};
