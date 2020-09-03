import React from 'react'

import { StyledButton } from './styles'

const Button: React.FC = (props) => {
  return (
      <StyledButton>
          {props.children}
      </StyledButton>  
  );
}
 
export default Button;