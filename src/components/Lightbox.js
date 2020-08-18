import React, { useState, useEffect } from "react"
import styled from "styled-components"

import SliderArrow from "./SliderArrow"
import CloseCross from "./CloseCross"

const LightBoxWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transform-origin: center;
  width: ${props => (props.display ? "100%" : "0")};
  height: ${props => (props.display ? "82vh" : "0")};
  opacity: ${props => (props.display ? "1" : "0")}; 
  transition: all .3s ease-in-out;
  padding: 1rem;
  background: #000;
  color: whitesmoke;
  overflow: hidden;
  z-index: 99999;

  /* display: ${props => (props.display ? "block" : "none")}; */

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: calc(100% - 2rem);
    width: auto;
  }
`

const Lightbox = props => {
  const imageData = props.data
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  useEffect(() => {
    setCurrentImgIndex(props.imgIndex)
  }, [props.imgIndex])

  const scrollLeft = () => {
    currentImgIndex !== 0
      ? setCurrentImgIndex(currentIndex => currentIndex - 1)
      : setCurrentImgIndex(imageData.length - 1)
  }

  const scrollRight = () => {
    currentImgIndex < imageData.length - 1
      ? setCurrentImgIndex(currentIndex => currentIndex + 1)
      : setCurrentImgIndex(0)
  }

  return (
    <LightBoxWrapper display={props.display}>
      <CloseCross onClick={props.onClick} />
      <SliderArrow left onClick={scrollLeft} />
      {imageData[currentImgIndex] ? (
        <img
          src={imageData[currentImgIndex].download_url}
          alt="lightbox view"
          width={imageData[currentImgIndex].width}
          height={imageData[currentImgIndex].height}
        />
      ) : (
        <p>No Image</p>
      )}
      <SliderArrow right onClick={scrollRight} />
    </LightBoxWrapper>
  )
}

export default Lightbox
