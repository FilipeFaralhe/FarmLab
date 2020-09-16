import styled  from 'styled-components';

import background from '../../assets/img/imgSign.png'

export const Container = styled.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
  background-color: #E6E6F0; 
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: #E6E6F0;
`;

export const LogoContainer = styled.div `
  margin-bottom: 3rem;/*5 rem*/
  text-align: center;

  & > img {
    width: 25rem;/*25rem*/
    z-index: 1;
    position: relative;
    background-color:#E6E6F0;
  } 
`;

export const Form = styled.form ` 
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const LinkStyled = styled.p `
  font-size: 2rem;
  color: #000;  
  margin: 2.5rem;

  & > a {
    color: #000;
  }
`;

export const Background = styled.img` 
  flex: 1;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(0.8px);
  fill-opacity: inherit;
`;