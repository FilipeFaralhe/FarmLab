import React from 'react'

import { StyledInput } from './styles';

interface InputProps {
	id: string;
	type: string;
	placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
	return(
		<StyledInput id={props.id} type={props.type} placeholder={props.placeholder} />  
	);
}

export default Input;