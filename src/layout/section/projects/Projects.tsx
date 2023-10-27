import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project/Project";
import socialImg from "../../../assets/images/Preview.webp"
import taskManager from "../../../assets/images/Preview_1.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify={"space-around"}>
            <Project title={"Social network"}
                     text={"This is sample project description random things are here in" +
                " description This is sample project lorem ipsum generator for dummy content"}
                     src={socialImg}
                     stack={"Tech stack: HTML , JavaScript, SASS, React"}/>
            <Project title={"Todolist"} text={"This is sample project description random things are here in" +
                " description This is sample project lorem ipsum generator for dummy content"}
                     src={taskManager}
                     stack={"Tech stack: HTML , JavaScript, SASS, React"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;  
  background-color: #7878e3;
`
