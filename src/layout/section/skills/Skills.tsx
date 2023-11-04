import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"htmlSvg"} skillTitle={"HTML5"}/>
                    <Skill iconId={"cssSvg"} skillTitle={"CSS3"}/>
                    <Skill iconId={"jsSvg"} skillTitle={"JavaScript"}/>
                    <Skill iconId={"typeScriptSvg"} skillTitle={"TypeScript"}/>
                    <Skill iconId={"reactSvg"} skillTitle={"React"}/>
                    <Skill iconId={"reduxSvg"} skillTitle={"Redux"}/>
                    <Skill iconId={"gitSvg"} skillTitle={"Git"}/>
                    <Skill iconId={"jestSvg"} skillTitle={"Jest"}/>
                    <Skill iconId={"styledSvg"} skillTitle={"Styled Components"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
 
`