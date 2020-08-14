import styled  from 'styled-components';

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
  position: relative;

  background-color:#E6E6F0;
`

export const LogoContainer = styled.div `
  margin-bottom: 6rem;
  text-align: center;

  & + img {
    width: 30rem;
  }
`;

export const Form = styled.form ` 
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

/* #formLogin-content button {
  margin: 3rem 0;
  width: 18rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border: none;
  border-radius: 1.5rem;
  outline: 0;
  background-color: red;
  color: white;
  cursor: pointer;

  font-size: 2.5rem;
}

#formLogin-content button img {
  height: 40px;
}

#page-login p{
  font-size: 2rem;
  color: #000;
}

#page-login p#cadastre a {
  color:#000;
}

#page-login div#background {
  flex: 1;
  background-image: url('../../assets/img/imgSign.png');
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1.5px);
  fill-opacity: inherit;
} */