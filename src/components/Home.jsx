import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import backGround from "D:/Education/Workintech/fsweb-s8-challenge-pizza/images/iteration-1-images/home-banner.png";
import Logo from "./Logo"

const GlobalStyle = createGlobalStyle`  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  body {
    background-image: url(${backGround});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
     @media (max-width: 768px) {
      background-position: top;
      background-size: auto 120%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh; 
  padding-top: 15rem;
`

const WelcomeText = styled.h1`    
    font-family: Roboto Condensed;
    color: white;
    font-size: 5rem;
    font-weight: lighter;

    @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const Button = styled.button`
  background-color: #FDC913;
  border-radius: 2rem;
  padding: .75rem 3rem;
  font-family: Barlow;
  color: black;
  font-size: 1.25rem;
  
`

function Home() {
  const history = useHistory();

  function handleChange() {
    history.push("/orderPizza")
  }
  return (
    <div>
      <GlobalStyle />
      <Logo/>
      <Container>
        <WelcomeText>
          KOD ACIKTIRIR
          <br/>
          PİZZA DOYURUR
        </WelcomeText>
        <Button onClick={handleChange}>ACIKTIM</Button>
      </Container>
    </div>
  )
}

export default Home;
