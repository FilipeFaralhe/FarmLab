import React from 'react';

import Logo from '../../assets/img/logo.png'

import Submit from '../../assets/img/icons/SubmitLogin.png';

import { Container, Content, LogoContainer, Form, Cadastro, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

/* import Submit from '../../assets/img/icons/SubmitLogin.png'; */

function PageLogin() {
	return(
		<Container>
			<Content className="contaier">
				<LogoContainer id="logo-container">
					<img id="logoIcon" src={Logo} alt="FarmLab logo"/>
				</LogoContainer>
				<Form>
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
					<Button>
						<img src={Submit} alt="Entrar"/>
						Entrar
					</Button>
				</Form>
					<Cadastro id="cadastre">Não tem uma conta? <a href="/">Cadastre-se agora</a> </Cadastro>
			</Content>
				<Background id="background" />
    </Container>
	);
}

export default PageLogin;