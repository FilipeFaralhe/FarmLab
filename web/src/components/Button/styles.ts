import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: 2rem;
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

  & > img {
    width: 3.5rem;
  }
`