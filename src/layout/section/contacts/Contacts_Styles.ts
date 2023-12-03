import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Contacts = styled.section`
  position: relative;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 150px;
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.primaryBg};
  padding: 7px 15px;
  border-radius: 6px;

  color: ${theme.colors.titlesColor};
  font-family: Poppins,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  &::placeholder {
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.secondaryFontColor};
  }
`

export const S = {
    Contacts,
    Form,
    Field,
}