import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from "../../../assets/images/Social-network.webp"
import Todo from "../../../assets/images/Todo.webp"
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles';

const workData = [
    {
        title: "Social network (In progress)",
        text: "Social Network is an online platform that allows people to create an account and interact " +
            "with other people on the website. Users can build there virtual world on the site, " +
            "make friends and share their thoughts and ideas by writing a post.",
        imgSrc: socialImg,
        stack: "React, Redux, TypeScript",
        previewLink: "#",
        gitHubLink:"https://github.com/MaximChizhevskiy/social-network"
    },
    {
        title: "Todolist",
        text: "ToDo List is an online platform for organizing your personal or work tasks which can help you to " +
            "increase the productivity, prioritise tasks, manage tasks effectively and improve time management.",
        imgSrc: Todo,
        stack: "React, Redux-toolkit, TypeScript, Hooks, MUI",
        previewLink: "https://maximchizhevskiy.github.io/todolist/",
        gitHubLink: "https://github.com/MaximChizhevskiy/todolist"
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"space-around"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((p, index) => {
                        return <Project key={index} title={p.title} text={p.text} imgSrc={p.imgSrc} stack={p.stack}
                                        previewHref={p.previewLink} gitHubHref={p.gitHubLink}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
