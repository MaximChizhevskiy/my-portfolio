import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
           <FlexWrapper align={'center'} justify={'space-between'}>
               <div>
                   <GreetingStyled>Hi, There!👋</GreetingStyled>
                   <Name>I'm <span>Maxim Chizhevskiy</span></Name>
                   <MainTitle>Frontend developer.</MainTitle>
               </div>

               <PhotoWrapper>
                   <Photo src={photo} alt={'Maxim Chizhevskiy'}/>
               </PhotoWrapper>
           </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  /*border: 10px solid ${theme.colors.accent};*/
  border-radius: 50px 0;
`
const PhotoWrapper = styled.div`
  position: relative;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -20px;
    left: 24px;
    border-radius: 50px 0;
  }
`

const StyledMain = styled.section`
  min-height: 100vh;
  color: #FFF;
  display: flex;  
`

const GreetingStyled = styled.span`
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const MainTitle = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Name = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 15px;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: 0;
      z-index: -1;
    }  
  }
`