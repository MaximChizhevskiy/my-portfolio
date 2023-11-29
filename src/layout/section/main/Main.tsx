import React from 'react';
import photo from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
           <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
               <div>
                   <S.GreetingStyled>Hi, There!👋</S.GreetingStyled>
                   <S.Name><p>I'm</p> <span>Maxim Chizhevskiy</span></S.Name>
                   <S.MainTitle>Frontend developer.</S.MainTitle>
               </div>

               <S.PhotoWrapper>
                   <S.Photo src={photo} alt={'Maxim Chizhevskiy'}/>
               </S.PhotoWrapper>
           </FlexWrapper>
            </Container>
        </S.Main>
    );
};
