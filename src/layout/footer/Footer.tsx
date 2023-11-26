import React from 'react';
import styled from "styled-components";
import {SocialsIconsList} from "../../components/socialsIcons/SocialsIconsList";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"} align-items={"center"} wrap={"wrap"}>
            <ContentBlock>
                <Text>Call me:</Text>
                <Text>+7-(701)-855-68-18</Text>
            </ContentBlock>
            <ContentBlock>
                <Text>Email:</Text>
                <Text>max15.91@mail.ru</Text>
            </ContentBlock>
                <ContentBlock>
            <SocialsIconsList isFooter/>
                </ContentBlock>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #0F1624;
  color: #FFF;
  padding-top: 45px;
  padding-bottom: 65px;
`

const ContentBlock = styled.div`
    @media ${theme.media.mobile} {
      margin: 15px;
    }
`

const Text = styled.p`
  margin: 0 auto;   
`
