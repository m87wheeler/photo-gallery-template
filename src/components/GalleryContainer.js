import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useWindowSize } from "../hooks/useWindowResize"
import { sortEveryNth } from "../assets/logic/sortEveryNth"

import GalleryThumbnail from "./GalleryThumbnail"
import LightBox from "./Lightbox"

const GalleryImage = styled(GalleryThumbnail)`
  width: 100%;
  height: auto;
  overflow: hidden;
`

const GalleryWrapper = styled.main`
  width: 100%;
  height: auto;
  padding: 1rem;
  column-count: 5;
  column-gap: 1em;
  background: #111;

  @media (max-width: 1365px) {
    column-count: 4;
  }
  @media (max-width: 1023px) {
    column-count: 3;
  }
  @media (max-width: 799px) {
    column-count: 2;
  }
  @media (max-width: 599px) {
    column-count: 1;
  }
`

const GalleryContainer = () => {
  // ***** state *****
  const [width] = useWindowSize()
  const [isLoading, setIsLoading] = useState(true)
  const [imageData, setImageData] = useState([])
  const [sortedImageData, setSortedImageData] = useState([])
  const [clickedImgIndex, setClickedImgIndex] = useState("")
  const [displayLightBox, setDisplayLightBox] = useState(0)

  // ***** fetch data *****
  const fetchData = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setImageData(data)
    } catch (err) {
      console.log("Error:", err)
    }
  }

  useEffect(() => {
    fetchData("https://picsum.photos/v2/list?page=12")
  }, [])

  // ***** sort array of data based on viewport width *****
  useEffect(() => {
    if (width > 1366) {
      setSortedImageData(sortEveryNth(imageData, 5))
    } else if (width > 1024 && width <= 1366) {
      setSortedImageData(sortEveryNth(imageData, 4))
    } else if (width > 800 && width <= 1024) {
      setSortedImageData(sortEveryNth(imageData, 3))
    } else if (width > 600 && width <= 800) {
      setSortedImageData(sortEveryNth(imageData, 2))
    } else {
      setSortedImageData(imageData)
    }
    setIsLoading(false)
  }, [width, imageData])

  // ***** handle open/close lightbox *****
  // ***** pass clicked img index to child *****
  const handleImageClick = e => {
    if (!displayLightBox) {
      setDisplayLightBox(1)
      const value = e.target.dataset.src
      setClickedImgIndex(value)
    } else {
      setDisplayLightBox(0)
    }
  }

  // ***** component *****
  return (
    <GalleryWrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        sortedImageData.map((img, index) => (
          <GalleryImage
            key={img.id}
            src={img.download_url}
            index={index.toString()}
            onClick={handleImageClick}
          />
        ))
      )}
      <React.Fragment>
        <LightBox
          data={sortedImageData}
          imgIndex={clickedImgIndex}
          display={displayLightBox}
          onClick={handleImageClick}
        />
      </React.Fragment>
    </GalleryWrapper>
  )
}

export default GalleryContainer
