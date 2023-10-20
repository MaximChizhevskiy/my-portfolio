import React from 'react';
import styled from "styled-components";

type WorkProjectType = {
    title: string
    text: string
    src: string
    stack: string
}

export const Project = (props: WorkProjectType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={""}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Stack>{props.stack}</Stack>
            <Link href={"#"}>Live Preview</Link>
            <Link href={"#"}>View Code</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: lightgreen;
  max-width: 375px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
`

const Link = styled.a`
    padding-left: 25px;
`

const Title = styled.h3`
    
`
const Text = styled.p`
    
`

const Stack = styled.p`
    
`

