import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/main_photo.webp'
import {FlexWrapper} from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
           <FlexWrapper align={'center'} justify={'space-around'}>
               <div>
                   <span>Hi, There!</span>
                   <Name>I'm Lorem ipsum</Name>
                   <MainTitle>Frontend developer</MainTitle>
               </div>
               <Photo src={photo} alt={'Maxim Chizhevskiy'}/>
           </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
`
const StyledMain = styled.div`
  min-height: 100vh;
  background: #48a111;
  color: #FFF;
`
const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`