import React from 'react'
import styled, { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import backGround from "D:/Education/Workintech/fsweb-s8-challenge-pizza/images/iteration-1-images/home-banner.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Chelsea+Market&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
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
  }
`;

const Logo = styled.img`
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
`

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
      <Logo src="../images/iteration-1-images/logo.svg" />
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
