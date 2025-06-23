import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import RickAndMorty from "../../../assets/images/rick-and-morty.webp"
import Todo from "../../../assets/images/Todo.webp"
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles';

const workData = [
    {
        title: "Rick and Morty app",
        text: "This project was built using the Rick and Morty API. The main goal of the project was to work " +
            "with external RESTful APIs, dynamic data rendering and modern frontend technologies.",
        imgSrc: RickAndMorty,
        stack: "React, JavaScript, React Router, Axios, Vite",
        previewLink: "https://maximchizhevskiy.github.io/rick-and-morty-app/",
        gitHubLink:"https://github.com/MaximChizhevskiy/rick-and-morty-app"
    },
    {
        title: "Todolist",
        text: "ToDo List is an online platform for organizing your personal or work tasks which can help you to " +
            "increase the productivity, prioritise tasks, manage tasks effectively and improve time management.",
        imgSrc: Todo,
        stack: "React, Redux-toolkit, TypeScript, Hooks, MUI",
        previewLink: "https://maximchizhevskiy.github.io/task-manager/",
        gitHubLink: "https://github.com/MaximChizhevskiy/task-manager"
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
