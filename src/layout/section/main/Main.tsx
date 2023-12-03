import React from 'react';
import photo from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
           <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
               <div>
                   <S.GreetingStyled>Hi, There!👋</S.GreetingStyled>
                   <S.Name><p>I'm</p> <span>Maxim Chizhevskiy</span></S.Name>
                   <S.MainTitle>
                       <p>Frontend developer.</p>
                       <Typewriter
                           options={{
                               strings: ['Frontend developer.'],
                               autoStart: true,
                               loop: true,
                               delay: 100
                           }}
                       />
                   </S.MainTitle>
               </div>

               <S.PhotoWrapper>
                   <S.Photo src={photo} alt={'Maxim Chizhevskiy'}/>
               </S.PhotoWrapper>
           </FlexWrapper>
            </Container>
        </S.Main>
    );
};
