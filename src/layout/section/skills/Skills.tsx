import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"htmlSvg"}/>
                <Skill iconId={"cssSvg"}/>
                <Skill iconId={"jsSvg"}/>
                <Skill iconId={"typeScriptSvg"}/>
                <Skill iconId={"reactSvg"}/>
                <Skill iconId={"reduxSvg"}/>
                <Skill iconId={"gitSvg"}/>
                <Skill iconId={"gitHubSvg"}/>
                <Skill iconId={"jestSvg"}/>
                <Skill iconId={"styledSvg"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #97f3f3;
  min-height: 100vh;
`