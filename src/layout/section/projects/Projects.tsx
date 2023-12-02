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
        text: "This is sample project description random things are here in" +
            " description This is sample project lorem ipsum generator for dummy content",
        src: socialImg,
        stack: "HTML, JavaScript, SASS, React"
    },
    {
        title: "Todolist",
        text: "This is sample project description random things are here in" +
            " description This is sample project lorem ipsum generator for dummy content",
        src: Todo,
        stack: "HTML , JavaScript, SASS, React"
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"space-around"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((p, index) => {
                        return <Project key={index} title={p.title} text={p.text} src={p.src} stack={p.stack}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
