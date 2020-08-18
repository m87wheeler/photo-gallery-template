import React from "react"
import styled from "styled-components"

const CrossWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 4rem;
  width: 4rem;
  height: 4rem;
  background: whitesmoke;
  border-radius: 100%;
  opacity: 0.1;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`

const CrossBarBack = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  width: 3rem;
  height: 0.5rem;
  background: #000;
`

const CrossBarForward = styled(CrossBarBack)`
  transform: translateX(-50%) translateY(-50%) rotate(-45deg);
`

const CloseCross = props => {
  return (
    <CrossWrapper onClick={props.onClick}>
      <CrossBarBack />
      <CrossBarForward />
    </CrossWrapper>
  )
}

export default CloseCross
