import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const MenuItem = styled.li`
  position: relative;
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
//menu
const NavLink = styled(Link)`
  font-family: 'Poppins',serif;
  font-size: 20px;
  color: transparent;
  transition: ${theme.animations.transition};
  cursor: pointer;
  
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
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
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

//mobile menu
const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(15, 22, 36, 0.9);
  display: flex;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    transition: .5s ease-in-out;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  background-color: rgba(22, 29, 42, 0.9);
  z-index: 9999999; 
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.titlesColor};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.titlesColor};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.titlesColor};
      position: absolute;
      transform: translateY(10px);
      
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
 `

//desktop menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
  }
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu
}