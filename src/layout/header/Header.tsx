import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialsIcons} from "../../components/socialsIcons/SocialsIcons";

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo/>
                Portfolio
                <Menu/>
                <SocialsIcons/>
            </StyledHeader>
        </div>
    );
};

//styles
const StyledHeader = styled.header`
  background-color: #0F1624;
  color: #FFF;

  ul {
    display: flex;
    gap: 30px;
  }

  display: flex;
  justify-content: space-between;
`;

