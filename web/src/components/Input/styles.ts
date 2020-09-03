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
<<<<<<< HEAD
<<<<<<< HEAD

  ${props => props.id === 'email' && css `
    background: url(${ImgUser}) no-repeat;
    background-position: 5px;
=======
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
  background-position: 9px;

  ${props => props.id === 'email' && css `
    background: url(${ImgUser}) no-repeat;
<<<<<<< HEAD
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
  `}
  
  ${props => props.id === 'password' && css `
    background: url(${ImgPassowrd}) no-repeat;
<<<<<<< HEAD
<<<<<<< HEAD
    background-position: 5px;
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
  `}
`