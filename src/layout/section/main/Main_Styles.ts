import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0;
  
  @media ${theme.media.mobile}{
    width: 310px;  
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  margin-top: 25px;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -20px;
    left: 24px;
    border-radius: 50px 0;

    @media ${theme.media.mobile}{
      width: 290px;
      height: 400px;
    }
  }
`

const Main = styled.section`
  min-height: 100vh;
  color: #FFF;
  display: flex;  
`

const GreetingStyled = styled.span`
  ${font({weight: 700, Fmax: 35, Fmin: 25})}
  font-style: normal;
  line-height: 70px;
  letter-spacing: -1px;
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 35, Fmin: 25})}
  font-style: normal;
  line-height: 70px;
  letter-spacing: -1px;
`

const Name = styled.h2`
  ${font({weight: 700, Fmax: 45, Fmin: 35})}
  font-style: normal;
  line-height: 70px;
  letter-spacing: -1px;
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
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
  
  @media ${theme.media.mobile} {
    margin: 5px 0 5px;
    line-height: 35px;    
  }
`

export const S = {
    Photo,
    PhotoWrapper,
    Main,
    GreetingStyled,
    MainTitle,
    Name
}