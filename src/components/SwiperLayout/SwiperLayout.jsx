import React from 'react';
import { ProfilePreview } from '../ProfilePreview';
import { ProfileInfo } from '../ProfileInfo';
import { Box, Wrapper, Container, Content, SideWrapper } from './SwiperLayout.styles';

export const SwiperLayout = () => {
  return (
    <Box>
      <Wrapper>
        <Container>
          <Content>
            <SideWrapper $isFullHeightMobile>
              <ProfilePreview />
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
