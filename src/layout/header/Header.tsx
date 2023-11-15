import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialsIconsList} from "../../components/socialsIcons/SocialsIconsList";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Projects", "Technologies", "Contacts"]

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        <HeaderMenu menuItems={items}/>
                        <SocialsIconsList/>
                    </FlexWrapper>
                </Container>
            </StyledHeader>
        </div>
    );
};

//styles
const StyledHeader = styled.header`
  background-color: #161D2A;
  color: #FFF;
  position: fixed;
  padding: 10px 0px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  ul {
    display: flex;
    gap: 30px;
  }

 `

