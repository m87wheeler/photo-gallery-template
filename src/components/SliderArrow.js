import React from "react"
import styled from "styled-components"

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.left ? "0" : null)};
  right: ${props => (props.right ? "0" : null)};
  transform: translateY(-50%);
  width: 4rem;
  height: 6rem;
  background: whitesmoke;
  opacity: 0.05;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  z-index: 999;

  &:hover {
    opacity: 0.4;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 0;
  height: 3rem;
  border-left: ${props => (props.right ? "2rem solid #000" : null)};
  border-right: ${props => (props.left ? "2rem solid #000" : null)};
  border-bottom: 1.5rem solid transparent;
  border-top: 1.5rem solid transparent;
`

const SliderArrow = props => {
  return (
    <ArrowWrapper left={props.left} right={props.right} onClick={props.onClick}>
      <Arrow left={props.left} right={props.right} />
    </ArrowWrapper>
  )
}

export default SliderArrow
