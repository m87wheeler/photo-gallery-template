import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import GalleryContainer from "./components/GalleryContainer"

const GlobalStyleReset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "gallery" "footer";
  grid-template-rows: 5rem 1fr 5rem;
`

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background: #333;
  border-bottom: 0.5rem solid #a8376d;
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 999;
`

const Footer = styled.footer`
  position: fixed;
  left: 0%;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: #333;
  border-top: 0.5rem solid #a8376d;
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyleReset />
      <Header>Gallery & Lightbox</Header>
      <GalleryContainer />
      <Footer>&copy; Martin Wheeler Web Development & Design</Footer>
    </AppWrapper>
  )
}

export default App
