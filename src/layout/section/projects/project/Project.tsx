import React from 'react';
import styled from "styled-components";
import {PreviewLinks} from "./previewLinks/PreviewLinks";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";

type WorkProjectType = {
    title: string
    text: string
    src: string
    stack: string
}

export const Project = (props: WorkProjectType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt={""}/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Stack>{props.stack}</Stack>
                <PreviewLinks/>
            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #363636;
  color: ${theme.colors.titlesColor};
  max-width: 375px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  
  @media ${theme.media.tablet} {
    margin-bottom: 20px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0 0;
`

const ImageWrapper = styled.div`
  position: relative;
  :hover {
    
    ::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    ${Button} {
      opacity: 1;
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
`

const Title = styled.h3`

`

const Description = styled.div`
  padding: 25px 25px;
`

const Text = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  margin: 15px 0;
`

const Stack = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 20px;
`

