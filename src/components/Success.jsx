import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
    body {
        background-color: #CE2829;        
    }
`


const Logo = styled.img`
    position: absolute;
    top: 7.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;

    &:hover {
        cursor: pointer;
    }
`

const SuccessText = styled.h1`
    margin: auto;
    font-family: Roboto Condensed;
    color: white;
    font-size: 4rem;
    font-weight: lighter;
`

function Success() {
    const history =useHistory();
    function handleClick() {
        history.push("/home")
    }
  return (    
    <div>
        <GlobalStyle />
        <Logo src="../images/iteration-1-images/logo.svg" onClick={handleClick} />
        <SuccessText>
            TEBRİKLER!
            <br/>
            SİPARİŞİNİZ ALINDI!
        </SuccessText>
        
    </div>
  )
}

export default Success