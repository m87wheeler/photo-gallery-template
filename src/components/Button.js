import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: block;
  border: 3px solid whitesmoke;
  background: transparent;
  color: whitesmoke;
  text-transform: uppercase;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
    color: #111;
  }
`

const Button = props => {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  )
}

export default Button
