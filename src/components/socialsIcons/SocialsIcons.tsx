import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import styled from "styled-components";

export const SocialsIcons = () => {
    return (
        <div>
        <IconsSocial IconId={"gitHubMinSvg"}/>
        <IconsSocial IconId={"linkedInSvg"}/>
        <IconsSocial IconId={"telegramSvg"}/>
        </div>

    );
};

const StyledSocialsIcons = styled.svg`
 
 `;
