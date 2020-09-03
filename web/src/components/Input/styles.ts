import styled, { css } from 'styled-components';

import ImgUser from '../../assets/img/icons/userLogin.png';
import ImgPassowrd from '../../assets/img/icons/PasswordLogin.png'; 

export const StyledInput = styled.input `
  width:  35rem;
  height: 5rem;

  margin-bottom: 3.2rem;
  padding: 0 4.5rem;
  
  border: none;
  outline: 0;
  border-bottom: 2px solid red;
  
  background-color: rgba(255, 255, 255, 0.0);
  
  ${props => props.id === 'email' && css `
    background: url(${ImgUser}) no-repeat;
    background-position: 5px;
  `}

  ${props => props.id === 'email' && css `
    background: url(${ImgUser}) no-repeat;
  `}
  
  ${props => props.id === 'password' && css `
    background: url(${ImgPassowrd}) no-repeat;
  `}
`