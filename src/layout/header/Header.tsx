import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialsIcons} from "../../components/socialsIcons/SocialsIcons";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Projects", "Technologies", "contacts"]

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        Portfolio
                        <Menu menuItems={items}/>
                        <SocialsIcons/>
                    </FlexWrapper>
                </Container>
            </StyledHeader>
        </div>
    );
};

//styles
const StyledHeader = styled.header`
  background-color: #73ec9d;
  color: #FFF;
  
  ul {
    display: flex;
    gap: 30px;
  }

 `

