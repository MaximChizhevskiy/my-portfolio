import React from 'react';
import styled from "styled-components";
import {SocialsIcons} from "../../components/socialsIcons/SocialsIcons";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"} align-items={"center"}>
            <FhoneBlock>
                <Text>Call me:</Text>
                <Text>+7-(701)-855-68-18</Text>
            </FhoneBlock>
            <MailBlock>
                <Text>Email:</Text>
                <Text>max15.91@mail.ru</Text>
            </MailBlock>
            <SocialsIcons/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  height: 18vh;
  background-color: #0F1624;
  padding-top: 35px;
  color: #FFF;
  
`

const FhoneBlock = styled.footer`
  
`

const MailBlock = styled.footer`
  
`
const Text = styled.p`
  margin: 0 auto;   
`
