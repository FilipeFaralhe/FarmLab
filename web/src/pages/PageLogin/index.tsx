import React from 'react';

import Logo from '../../assets/img/logo.png'
/* import Submit from '../../assets/img/icons/SubmitLogin.png'; */

import { Container, Content, LogoContainer, Form} from './styles';
import Input from '../../components/Input';

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
				</Form>
					<p id="cadastre">Não tem uma conta? <a href="/">Cadastre-se agora</a> </p>
			</Content>
				<div id="background" />
		</Container>
	);
}

export default PageLogin;