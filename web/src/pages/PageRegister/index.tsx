import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import Submit from '../../assets/img/icons/SubmitLogin.png';

import { Container, Content, Form, LinkStyled, Background} from '../PageLogin/styles';
import  { LogoContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';


const PageRegister: React.FC = () => {
  return(
    <Container>
    <Content className="contaier">
      <LogoContainer id="logo-container">
        <img id="logoIcon" src={Logo} alt="FarmLab logo"/>
      </LogoContainer>
      <Form>
        <Input 
          id="name" 
          type="text" 
          placeholder="Nome da empresa" 
        />
        <Input 
          id="email" 
          type="email" 
          placeholder="Email" 
        />
        <Input 
          id="password" 
          type="password" 
          placeholder="Password" 
        />
        <Input 
          id="telefone" 
          type="tel" 
          placeholder="Telefone" 
        />
        <Button>
          <img src={Submit} alt="Entrar"/>
            Cadastrar
        </Button>
      </Form>
        <LinkStyled><Link to="/">Voltar para Login</Link></LinkStyled>
    </Content>
      <Background id="background" />
  </Container>
  );
}

export default PageRegister;