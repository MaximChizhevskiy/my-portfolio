import React from 'react';
import styled from "styled-components";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={""}>
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
  }
`

const Link = styled.a`
  font-family: 'Poppins',serif;
  font-size: 16px;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: #FFF; 

  & + & {
    top: 50%;
  span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: #8643DC; 
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  
  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }  
    }
  }
`

