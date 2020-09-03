import React from 'react';

import Logo from '../../assets/img/logo.png'
<<<<<<< HEAD
<<<<<<< HEAD
import Submit from '../../assets/img/icons/SubmitLogin.png';

import { Container, Content, LogoContainer, Form, Cadastro, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
=======
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
/* import Submit from '../../assets/img/icons/SubmitLogin.png'; */

import { Container, Content, LogoContainer, Form} from './styles';
import Input from '../../components/Input';
<<<<<<< HEAD
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360

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
<<<<<<< HEAD
<<<<<<< HEAD
					<Button>
						<img src={Submit} alt="Entrar"/>
						Entrar
					</Button>
				</Form>
					<Cadastro id="cadastre">Não tem uma conta? <a href="/">Cadastre-se agora</a> </Cadastro>
			</Content>
				<Background id="background" />
=======
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
				</Form>
					<p id="cadastre">Não tem uma conta? <a href="/">Cadastre-se agora</a> </p>
			</Content>
				<div id="background" />
<<<<<<< HEAD
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
=======
>>>>>>> 810040f85fbad04930373d957fa46101aef8a360
		</Container>
	);
}

export default PageLogin;