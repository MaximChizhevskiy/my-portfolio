import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from "../../../assets/images/Social-network.webp"
import taskManager from "../../../assets/images/Todo.webp"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify={"space-around"} align={"flex-start"} wrap={"wrap"}>
            <Project title={"Social network (In progress)"}
                     text={"This is sample project description random things are here in" +
                " description This is sample project lorem ipsum generator for dummy content"}
                     src={socialImg}
                     stack={"Tech stack: HTML , JavaScript, SASS, React"} />
            <Project title={"Todolist"} text={"This is sample project description random things are here in" +
                " description This is sample project lorem ipsum generator for dummy content"}
                     src={taskManager}
                     stack={"Tech stack: HTML , JavaScript, SASS, React"} />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;  
  
`
